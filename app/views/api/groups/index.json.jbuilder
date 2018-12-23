@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :title, :lat, :lng, :private
    json.imgUrl url_for(group.img)
    json.members_count group.members_count
  end
end
