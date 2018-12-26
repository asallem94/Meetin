class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      @user.img.attach(io: 'app/assets/images/default/profile_img.png', filename: 'profile_img.png')
      log_in!(@user)
      render( "api/users/currentuser.json.jbuilder")
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def index
    @users = current_user.users_by_filters(params[:userFilter])
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :lng, :lat)
  end
end
