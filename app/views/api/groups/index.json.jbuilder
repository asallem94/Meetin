@groups.each do |group|
  json.set! group.id do
    json.extract! group, :title, :image_url, :members_count, :lat, :lng, :private
  end
end
