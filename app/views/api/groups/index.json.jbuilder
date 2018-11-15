@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :title, :img_url, :lat, :lng, :private
    json.members_count group.members_count
  end
end
