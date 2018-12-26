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

class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :commentable, :polymorphic => true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :discussion,
    foreign_key: :chat_id,
    class_name: :Discussion

  has_many :comments, as: :commentable

end
