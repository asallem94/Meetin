
class Api::GroupsMembershipsController < ApplicationController
  def show
    @membership = membership.find(params[:id])
  end
  def create
    @membership = GroupMembership.new(group_id: params[:group_id], user_id: current_user.id)
    @membership.save
    # debugger
    render 'api/group_memberships/show.json.jbuilder'
    # render json: @membership.errors.full_messages, status: 422
  end

  def destroy
    # id coming in is the GROUP id

    # @membership = GroupMembership.find_by(group_id: params[:id], user_id: current_user.id)
    @membership = GroupMembership.find(params[:id])
    # debugger
    @membership.destroy
    render 'api/group_memberships/show.json.jbuilder'
    # render json: @membership.errors.full_messages, status: 422
  end

end
