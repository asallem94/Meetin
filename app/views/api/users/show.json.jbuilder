
json.users do
  json.set! @user.id do
    json.partial! '/api/users/user', user: @user

    json.extract! @user, :bio, :lng, :lat
    json.set! :groups_count, @user.group_memberships.count
    json.set! :organized_groups, @user.organized_groups.ids
    json.chatIds @user.chats.ids
    json.set! :interestIds, @user.interests.ids
    # @user.user_interest_relationships.each do |interest_relationship|
    #   json.interestIds do
    #     json.set! interest_relationship.interest_id, interest_relationship.id
    #   end
    # end
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
  end
end
json.events do
  @user.attending_events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title, :start_date, :end_date
      json.imgUrl url_for(event.img)
    end
  end
end
json.groups do
  @user.groups.each do |group|
    json.set! group.id do
      json.extract! group, :id, :title
      json.imgUrl url_for(group.img)
      json.members_count group.members_count
    end
  end
end
json.interests do
  @user.interests.each do |interest|
    json.set! interest.id do
      json.extract! interest, :id, :picture_url, :topic_titles
    end
  end
end
