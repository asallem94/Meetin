# @users.each do |user|
#   user.set! user.id do
#     json.partial! '/api/users/user', user: user
#   end
# end
@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :name, :email
    json.imgUrl url_for(user.profile_img)
  end
end
