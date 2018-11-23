json.membership do
  json.extract! @membership, :id, :group_id, :user_id
end

json.groups do
  json.set! @membership.group_id do
    json.members_count @membership.group.members_count
  end
end
