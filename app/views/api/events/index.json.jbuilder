
users = []

@events.each do |event|
  sample_attendees = event.sample_attendees(5)
  json.set! event.id do
    json.extract! event, :id, :title, :event_img_url, :lat, :lng, :start_date, :end_date, :city, :detail, :private, :attendees_count
    json.attendees sample_attendees.ids
  end
  users.concat(sample_attendees)
  users.concat([event.host])


end


json.users do
  users.uniq.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end
end
