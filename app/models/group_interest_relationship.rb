# == Schema Information
#
# Table name: group_interest_relationships
#
#  id          :bigint(8)        not null, primary key
#  interest_id :integer          not null
#  group_id    :integer          not null
#

class GroupInterestRelationship < ApplicationRecord

  belongs_to :group,
    foreign_key: :group_id,
    class_name: :Group

  belongs_to :interest,
    foreign_key: :interest_id,
    class_name: :Interest

  # scope :going, -> { where(rsvp: :true) }
end
