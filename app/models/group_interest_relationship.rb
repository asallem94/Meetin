class GroupInterestRelationship < ApplicationRecord

  belongs_to :group,
    foreign_key: :group_id,
    class_name: :Group

  belongs_to :interest,
    foreign_key: :interest_id,
    class_name: :Interest

  # scope :going, -> { where(rsvp: :true) }
end
