class GroupMembership < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :group,
    foreign_key: :group_id,
    class_name: :Group



end
