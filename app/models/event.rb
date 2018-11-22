class Event < ApplicationRecord
  validates :title, :city, :address, :detail, :lng, :lat, :start_date, :end_date, presence: true

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
        .where("title LIKE :querySearch OR detail LIKE :querySearch", querySearch: "%#{querySearch}%")
        .where("start_date between :start_date AND :end_date", {start_date: start_date, end_date: end_date})

  end


end
