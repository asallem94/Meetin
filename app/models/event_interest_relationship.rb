# == Schema Information
#
# Table name: event_interest_relationships
#
#  id          :bigint(8)        not null, primary key
#  interest_id :integer          not null
#  event_id    :integer          not null
#

class EventInterestRelationship < ApplicationRecord

  belongs_to :event,
    foreign_key: :event_id,
    class_name: :Event

  belongs_to :interest,
    foreign_key: :interest_id,
    class_name: :Interest

  # scope :going, -> { where(rsvp: :true) }

end
