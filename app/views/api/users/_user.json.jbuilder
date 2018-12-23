
  json.extract! user, :id, :name, :lat, :lng
  json.imgUrl url_for(user.profile_img)
