# == Schema Information
#
# Table name: user_interest_relationships
#
#  id          :bigint(8)        not null, primary key
#  interest_id :integer          not null
#  user_id     :integer          not null
#

class UserInterestRelationship < ApplicationRecord

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :interest,
    foreign_key: :interest_id,
    class_name: :Interest

end
