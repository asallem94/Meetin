# == Schema Information
#
# Table name: events
#
#  id         :bigint(8)        not null, primary key
#  host_id    :integer          not null
#  group_id   :integer          not null
#  title      :string           not null
#  address    :string           not null
#  city       :string           not null
#  detail     :string           not null
#  lng        :float            not null
#  lat        :float            not null
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  private    :boolean          default(FALSE)
#  price      :float            default(0.0)
#

class Event < ApplicationRecord
  validates :title, :city, :address, :detail, :lng, :lat, :start_date, :end_date, presence: true

  has_one_attached :img

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  belongs_to :group,
    foreign_key: :group_id,
    class_name: :Group

  has_many :going_rsvps, -> { EventRsvp.going},
    foreign_key: :event_id,
    class_name: :EventRsvp

  has_many :attendees,
      through: :going_rsvps,
      source: :user

  def attendees_count
    self.going_rsvps.count
  end

  def sample_attendees(num)
    self.attendees.limit(num)
  end

  def self.events_by_filters(filters)
    r = (filters[:radi].to_i)/68.703
    lng = filters[:coord][:lng]
    lat = filters[:coord][:lat]
    querySearch = filters[:query]
    start_date = filters[:filterStartDate]
    end_date = filters[:filterEndDate]

    # filters:
      # {
      # queryType:"Groups",
      # filters:{
      #   query: "",
      #   radi: 5,
      #   coord:{
      #     lng: this.props.currentUser.lng,
      #     lat: this.props.currentUser.lat
      #   }
      # }

      Event.where("((lng - :lng) * (lng - :lng)) + ((lat - :lat) * (lat - :lat)) < :r * :r", {lng: lng, lat:lat, r: r})
        .where("title iLIKE :querySearch OR detail iLIKE :querySearch", querySearch: "%#{querySearch}%")
        .where("start_date between :start_date AND :end_date", {start_date: start_date, end_date: end_date})

  end

  has_many :event_interest_relationships,
    foreign_key: :event_id,
    class_name: :EventInterestRelationship

  has_many :interests,
    through: :event_interest_relationships,
    source: :interest


end
