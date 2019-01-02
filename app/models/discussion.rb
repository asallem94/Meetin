# == Schema Information
#
# Table name: discussions
#
#  id         :bigint(8)        not null, primary key
#  topic      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer
#  group_id   :integer
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
    self.comments.offset(offset).order(:created_at).limit(20)
  end

  def comment_count
    self.comments.count
  end
end
