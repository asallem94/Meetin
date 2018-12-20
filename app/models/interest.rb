# == Schema Information
#
# Table name: interests
#
#  id           :bigint(8)        not null, primary key
#  topic_titles :string           not null
#  picture_url  :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Interest < ApplicationRecord
  validates :topic_titles, :picture_url, presence: true, uniqueness: true

  has_many :event_interest_relationships,
    foreign_key: :interest_id,
    class_name: :EventInterestRelationship

  has_many :events,
    through: :event_interest_relationships,
    source: :event

  has_many :group_interest_relationships,
    foreign_key: :interest_id,
    class_name: :GroupInterestRelationship

  has_many :groups,
    through: :group_interest_relationships,
    source: :group

  has_many :user_interest_relationships,
    foreign_key: :interest_id,
    class_name: :UserInterestRelationship

  has_many :users,
    through: :user_interest_relationships,
    source: :user

end
