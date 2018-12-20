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

class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :chat,
    foreign_key: :chat_id,
    class_name: :Chat

end
