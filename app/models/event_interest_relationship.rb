class EventInterestRelationship < ApplicationRecord

  belongs_to :event,
    foreign_key: :event_id,
    class_name: :Event

  belongs_to :interest,
    foreign_key: :interest_id,
    class_name: :Interest

  # scope :going, -> { where(rsvp: :true) }

end
