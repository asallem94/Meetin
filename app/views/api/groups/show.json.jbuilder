sampled_group_members = @group.sample_members(10)

json.group do
  json.extract! @group, :id, :title, :img_url, :members_count, :organizer_id, :city, :description, :lng, :lat, :private
  json.member_ids sampled_group_members.ids
  json.count @group.members_count
  json.event_ids @group.events.ids
  json.interestIds @group.interests.ids
end

sampled_users = []
json.events do
  @group.events.each do |event|
    sample_attendees = event.sample_attendees(5)
    json.set! event.id do
      json.attendees_ids sample_attendees.ids
    end
    json.partial! '/api/events/event', event: event
    sampled_users = sampled_users.concat(sample_attendees)
  end
end


json.users do
  sampled_group_members.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end

  sampled_users.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end

  json.set! @group.organizer_id do
    json.partial! '/api/users/user', user: @group.organizer
  end

  json.set! current_user.id do
    json.partial! '/api/users/currentuser', user: current_user
  end
end
