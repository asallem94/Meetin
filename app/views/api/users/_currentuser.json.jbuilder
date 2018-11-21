

json.extract! user,:id, :name, :profile_img_url, :lat, :lng, :bio, :lng, :lat
json.set! :groups_count, user.group_memberships.count

user.group_memberships.each do |membership|
  json.groups do
    json.set! membership.group_id, membership.id
  end
end
user.events_rsvp.each do |rsvp|
  json.events do
    json.set! rsvp.event_id do
      json.going rsvp.rsvp
      json.rsvpId rsvp.id
    end
  end
end
