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
    @group.img_url = "http://www.clutterfairyhouston.com/wp/wp-content/uploads/2014/10/Depositphotos_12802359_s-Golden-Abstract-Bokeh-Background-Gold-Dust-over-Black-cropped-719x321.jpg"
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
    params.require(:group).permit(:title, :city, :description, :lng, :lat)
  end

end
