json.chats do
  @chats.each do |chat|
    json.set! chat.id do
      json.extract! chat, :id, :title
      if (chat.lastMessage)
        json.lastMessageId chat.lastMessage.id
      end
    end
  end
end

json.messages do
  @chats.each do |chat|
    if chat.lastMessage
      json.set! chat.lastMessage.id do
        json.extract! chat.lastMessage, :id, :body, :author_id, :chat_id, :created_at
      end
    end
  end
end
