# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  name            :string           not null
#  profile_img_url :string
#  bio             :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  lng             :float            not null
#  lat             :float            not null
#

class User < ApplicationRecord
  validates :name, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true

  validates :password, length: {minimum: 6, allow_nil: true}

  before_validation :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(maybe_password)
    BCrypt::Password.new(self.password_digest).is_password?(maybe_password)
  end

  def password=(new_password)
    @password = new_password
    self.password_digest = BCrypt::Password.create(new_password)
  end

  def reset_session_token!
    self.session_token = self.generate_session_token!
    self.save
    self.session_token
  end
  def ensure_session_token
    self.session_token ||= self.generate_session_token!
  end

  has_many :organized_groups,
    foreign_key: :organizer_id,
    class_name: :Group

  has_many :group_memberships,
    foreign_key: :user_id,
    class_name: :GroupMembership

  has_many :groups,
    through: :group_memberships,
    source: :group

  has_many :aquaintances,
    through: :groups,
    source: :members

  has_many :my_groups_events,
    through: :groups,
    source: :events

  has_many :events_rsvp,
    foreign_key: :user_id,
    class_name: :EventRsvp

  has_many :hosted_events,
    foreign_key: :host_id,
    class_name: :Event

  has_many :going_responses, -> { EventRsvp.going},
    foreign_key: :user_id,
    class_name: :EventRsvp

  has_many :attending_events,
    through: :going_responses,
    source: :event

  # action cable associations
  has_many :user_relationships,
    foreign_key: :user_id,
    class_name: :ChatUserRelationship

  has_many :chats,
    through: :user_relationships,
    source: :chat

  has_many :messages,
    foreign_key: :author_id,
    class_name: :Message

  def users_by_filters(querySearch)
    self.aquaintances.distinct.where("name iLIKE :querySearch OR email iLIKE :querySearch", querySearch: "%#{querySearch}%")
  end


  has_many :user_interest_relationships,
    foreign_key: :user_id,
    class_name: :UserInterestRelationship

  has_many :interests,
    through: :user_interest_relationships,
    source: :interest

  # private
  def generate_session_token!
    SecureRandom.urlsafe_base64
  end
end
