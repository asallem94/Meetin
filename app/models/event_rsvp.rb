# == Schema Information
#
# Table name: event_rsvps
#
#  id       :bigint(8)        not null, primary key
#  user_id  :integer          not null
#  event_id :integer          not null
#  rsvp     :boolean          default(FALSE)
#

class EventRsvp < ApplicationRecord

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :event,
    foreign_key: :event_id,
    class_name: :Event

  scope :going, -> { where(rsvp: :true) }

end
