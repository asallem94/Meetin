
# json.message do
#   json.set! @message.id do
    json.extract! @message, :id, :body, :author_id, :chat_id, :created_at
#   end
# end

# json.chats do
#   json.extract! @message, :id, :body, :author_id, :chat_id
# end
