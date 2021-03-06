class Api::EventsController < ApplicationController

  def show
    @event = Event.find(params[:id])
  end

  def index
    case params[:filters][:eventFilterType]
    when "All Meetins"
      @events = Event.events_by_filters(params[:filters]).includes(:attendees).includes(:group)
    when "My Meetins"
      @events = current_user.my_groups_events.events_by_filters(params[:filters]).includes(:attendees).includes(:group)
    when "I'm going"
      @events = current_user.attending_events.events_by_filters(params[:filters]).includes(:attendees).includes(:group)
    else
      @events = Event.events_by_filters(params[:filters]).includes(:attendees).includes(:group)
    end
  end

  def new
    @event = Event.new()
  end

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id
    @event.group_id = params[:group_id]
    @event.img.attach(io: File.open("app/assets/images/default/event1.jpg"), filename: 'event1.jpg')
    if @event.save
      @event.attendees = [current_user]
      @event.interests = params[:event][:interestIds].map{|interest_id| Interest.find(interest_id)}
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
    params.require(:event).permit(:title, :image_url, :city, :detail, :lng, :lat, :private, :start_date, :end_date, :address, :img)
  end

end
