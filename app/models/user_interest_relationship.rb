class UserInterestRelationship < ApplicationRecord

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :interest,
    foreign_key: :interest_id,
    class_name: :Interest

  # scope :going, -> { where(rsvp: :true) }

end
