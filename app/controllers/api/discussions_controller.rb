class Api::DiscussionsController < ApplicationController

  def create
    @discussion = Discussion.new(discussion_params)
    # chat = Chat.find(params[:chat_id])
    @discussion.group_id = params[:group_id]
    @discussion.author = current_user
    if @discussion.save
      # serialized_data = ActiveModelSerializers::Adapter::Json.new(
      #   DiscussionSerializer.new(@discussion)
      # ).serializable_hash
      # DiscussionsChannel.broadcast_to chat, serialized_data
      # head :ok
    end
    render :show
  end

  def show
    @discussion = Discussion.find(params[:id])
    if params[:discussion][:offset]
      offset = params[:discussion][:offset]
    else
      offset = 0
    end
    @recent_comments = @discussion.recent_comments(offset)
  end

  def index
    @discussions = Group.find(params[:group_id]).discussions
  end

  def discussion_params
    params.require(:discussion).permit( :topic, :author_id )
  end

end
