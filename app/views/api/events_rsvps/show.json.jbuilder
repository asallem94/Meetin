json.rsvp do
  json.extract! @rsvp, :id, :event_id, :user_id, :rsvp
end

json.events do
  json.set! @rsvp.event_id do
    json.attendees_count @rsvp.event.attendees_count
  end
end


# json.users do
#   json.events do
#     json.extract! :id :rsvp
#   end
# end
