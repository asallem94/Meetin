class Api::CommentsController < ApplicationController

  def create
    @comment = Discussion.new(comment_params)
    # chat = Chat.find(params[:chat_id])
    @comment.author = current_user
    if @comment.save
      # serialized_data = ActiveModelSerializers::Adapter::Json.new(
      #   DiscussionSerializer.new(@comment)
      # ).serializable_hash
      # DiscussionsChannel.broadcast_to chat, serialized_data
      # head :ok
    end
    render :show
  end

  def comment_params
    params.require(:comment).permit( :body, :author_id )
  end

end
