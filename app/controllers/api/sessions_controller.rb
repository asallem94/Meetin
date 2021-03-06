class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      render( "api/users/currentuser.json.jbuilder")
    else
      render json: ["Invalid email or password credentials"], status: 404
    end
  end

  def destroy
    if logged_in?
      log_out!
      render json: {}
    else
      render status: 404
    end
  end
end
