class Api::EventsController < ApplicationController

  def show
    @event = Event.find(params[:id])
  end

  def index
    # @events = Event.events_by_filters(params[:filters])
    @events = Event.all
  end

  def new
    @event = Event.new()
  end

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id
    @event.group_id = params[:group_id]
    @event.event_img_url = "https://www.pixelstalk.net/wp-content/uploads/2016/11/Color-explosion-wallpaper-2560x1600.jpg"
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def event_params
    params.require(:event).permit(:title, :image_url, :city, :detail, :lng, :lat, :private, :start_date, :end_date, :address)
  end

end
