class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :author_id, :chat_id, :created_at
end
