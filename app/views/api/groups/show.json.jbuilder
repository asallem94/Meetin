sampled_group_members = @group.sample_members(10)

json.group do
  json.extract! @group, :id, :title, :img_url, :members_count, :organizer_id, :city, :description, :lng, :lat, :private
  json.member_ids sampled_group_members.ids
  json.count @group.members_count
end

json.users do
  sampled_group_members.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end
end
