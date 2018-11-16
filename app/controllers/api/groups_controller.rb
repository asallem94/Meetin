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
    if @group.save
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
    params.require(:groups).permit(:title, :image_url, :city, :description, :lng, :lat, :private)
  end

end
