class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(body: params[:comment][:body])
    case params[:comment][:type]
    when "discussions"
      @discussion = Discussion.find(params[:comment][:typeId])
      @comment.commentable = @discussion
    when "events"
      @comment.commentable = Event.find(params[:comment][:typeId])
    when "comments"
      @comment.commentable = Comment.find(params[:comment][:typeId])
    end
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

end
