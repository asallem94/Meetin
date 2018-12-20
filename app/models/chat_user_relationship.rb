# == Schema Information
#
# Table name: chat_user_relationships
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  chat_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChatUserRelationship < ApplicationRecord

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :chat,
    foreign_key: :chat_id,
    class_name: :Chat

end
