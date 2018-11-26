class MessagesChannel < ApplicationCable::Channel
  def subscribed
    if params[:id]
      chat = Chat.find(params[:id])
      stream_for chat if chat
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # def speak(data)
  #   ActionCable.server.broadcast 'message_channel', message: message
  # end
end
