# == Schema Information
#
# Table name: group_memberships
#
#  id       :bigint(8)        not null, primary key
#  user_id  :integer          not null
#  group_id :integer          not null
#

class GroupMembership < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :group,
    foreign_key: :group_id,
    class_name: :Group



end
