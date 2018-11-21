@users.each do |user|
  user.set! user.id do
    json.partial! '/api/users/user', user: @user
  end
end
