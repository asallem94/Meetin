class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.profile_img_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFSqtFBX1VvqWmYgkIMcyyumxjffeiECt1m63GgWnY7TAkdE7"
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def index
    @users = currentUser.aquaintances(params[:query])
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :lng, :lat)
  end
end
