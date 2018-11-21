
class Api::EventsRsvpsController < ApplicationController
  def show
    @rsvp = rsvp.find(params[:id])
  end
  def create
    @rsvp = EventRsvp.new(event_id: params[:event_id], user_id: current_user.id, rsvp: params[:rsvp])
    @rsvp.save
    render 'api/events_rsvps/show.json.jbuilder'
    # render json: @membership.errors.full_messages, status: 422
  end

  def update
    @rsvp = EventRsvp.find(params[:id])
    @rsvp.update_attributes(rsvp: params[:rsvp])
    render 'api/events_rsvps/show.json.jbuilder'
  end
  def rsvp_params
    params.require(:event_rsvp).permit(:event_id, :rsvp)
  end
end
