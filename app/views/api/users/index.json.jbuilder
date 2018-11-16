@users.each do |user|
  user.set! user.id do
    json.extract! user, :id, :name, :profile_img_url
  end
end
