class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    # debugger
    chat = Chat.find(params[:chat_id])
    if @message.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new(@message)
      ).serializable_hash
      MessagesChannel.broadcast_to chat, serialized_data
      head :ok
    end
    # render 'api/messages/show'
  end

  def message_params
    params.require(:message).permit(:chat_id, :body, :author_id)
  end

end
