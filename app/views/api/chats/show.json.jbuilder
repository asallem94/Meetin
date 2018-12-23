json.chats do
  json.set! @chat.id do
    json.extract! @chat, :id, :title, :updated_at
    json.messages_ids @chat.messages.ids
    json.member_ids @chat.members.ids
  end
end

json.messages do
  @chat.messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :body, :author_id, :chat_id, :created_at
    end
  end
end

json.users do
  @chat.members.each do |user|
    json.set! user.id do
      json.extract! user, :id, :name
      json.imgUrl url_for(user.profile_img)
    end
  end
end
