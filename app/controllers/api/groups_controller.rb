class Api::GroupsController < ApplicationController

  def show
    @group = Group.find(params[:id])
  end

  def index
    @groups = Group.groups_by_filters(params[:filters])
  end

  def new
    @group = Group.new()
  end

  def create
    @group = Group.new(group_params)
    @group.organizer_id = current_user.id
    @group.img.attach(io: File.open("app/assets/images/default/group1.jpg"), filename: 'group1.jpg')
    if @group.save
      @group.members = [current_user]
      @group.interests = params[:group][:interestIds].map{|interest_id| Interest.find(interest_id)}
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    @group = Group.find(params[:id])
    if @group.update_attributes(group_params)
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def group_params
    params.require(:group).permit(:title, :city, :description, :lng, :lat, :img)
  end

end
