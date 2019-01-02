# == Schema Information
#
# Table name: comments
#
#  id               :bigint(8)        not null, primary key
#  body             :string           not null
#  commentable_type :string
#  commentable_id   :bigint(8)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  author_id        :integer
#

class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :commentable, :polymorphic => true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments, as: :commentable

  def parent
    Comment.find(self.id).commentable_type.constantize.find(Comment.find(self.id).commentable_id)
  end

  def parent_count
    self.parent.comment_count
  end

  def comments_sorted
    self.comments.order(:created_at)
  end

  def comment_count
    self.comments.count
  end
end
