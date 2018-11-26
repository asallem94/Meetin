class Chat < ApplicationRecord
  validates :title, presence: true

  has_many :chat_relationships,
    foreign_key: :chat_id,
    class_name: :ChatUserRelationship

  has_many :members,
    through: :chat_relationships,
    source: :user

  has_many :messages,
    foreign_key: :chat_id,
    class_name: :Message

end
