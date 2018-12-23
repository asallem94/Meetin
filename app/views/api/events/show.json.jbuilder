sampled_event_attendees = @event.sample_attendees(8)

json.event do
  json.extract! @event, :id, :title, :address, :attendees_count, :host_id, :city, :detail, :lng, :lat, :start_date, :end_date, :private, :group_id
  json.imgUrl url_for(@event.img)
  json.attendees_ids sampled_event_attendees.ids
  json.count @event.attendees_count
  json.group_name @event.group.title
  json.interestIds @event.interests.ids
end

json.users do
  sampled_event_attendees.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end
  json.set! @event.host_id do
    json.partial! '/api/users/user', user: @event.host
  end
end
