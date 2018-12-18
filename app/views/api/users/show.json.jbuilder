json.partial! '/api/users/user', user: @user

json.extract! @user, :bio, :lng, :lat
json.set! :groups_count, @user.group_memberships.count
json.set! :organized_groups, @user.organized_groups.ids
json.chatIds @user.chats.ids

@user.group_memberships.each do |membership|
  json.groups do
    json.set! membership.group_id, membership.id
  end
end
@user.events_rsvp.each do |rsvp|
  json.events do
    json.set! rsvp.event_id do
      json.going rsvp.rsvp
      json.rsvpId rsvp.id
    end
  end
end
