class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :chat,
    foreign_key: :chat_id,
    class_name: :Chat

end
