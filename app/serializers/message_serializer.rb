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

class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :author_id, :chat_id, :created_at
end
