
  json.extract! user, :id, :name, :profile_img_url, :bio, :email, :lng, :lat
  json.set! :groups_count, user.group_memberships.count

  user.group_memberships.each do |membership|
    json.groups do
      json.set! membership.group_id, membership.id
    end
  end
# debugger
# json.array![(user.groups.ids)
