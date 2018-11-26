class Api::ChatsController < ApplicationController

  def index
    @chats = current_user.chats
  end

  def create
    @chat = Chat.new(params[:chat][:title])
    if @chat.save
      params[:chat][:member_ids].each do |member_id|
        @chat.members << User.find(member_id)
      end

      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        ChatSerializer.new(chat)
      ).serializable_hash
      ActionCable.server.broadcast 'chats_channel', serialized_data
      head :ok

    end
    # render 'api/chats/show'
  end

  def show
    @chat = Chat.find(params[:id])
  end

  def chat_params
    params.require(:chat).permit(:title, :members)
  end

end
