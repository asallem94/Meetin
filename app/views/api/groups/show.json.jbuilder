json.group do
  json.extact! @group :title, :image_url, :members_count, :organizer_id, :city, :description, :lng, :lat, :private
  json.member_ids @group.sample_members(10)
  json.count @goup.members_count
end
