# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  chat_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Discussion < ApplicationRecord
  validates :topic, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :group,
    foreign_key: :group_id,
    class_name: :Group

  has_many :comments, as: :commentable

  def recent_comments(offset)
    self.comments.offset(offset).order(created_at: :desc).limit(20)
  end
end
