class Group < ApplicationRecord
  validates :title, :city, :description, :lng, :lat, presence: true

  belongs_to :organizer,
    foreign_key: :organizer_id,
    class_name: :User

  has_many :user_memberships,
    foreign_key: :group_id,
    class_name: :GroupMembership

  has_many :members,
    through: :user_memberships,
    source: :user

  def members_count
    self.members.count
  end

  def sample_members(num)
    self.members.limit(num)
  end
  def groups_by_filters(filters)
    debugger
    r = filters[:radius]/68.703
    lng = filters[:lng]
    lat = filters[:lat]
    querySearch = filters[:querySearch]

    # filters:
      # location:
        # radius:
        # lng:
        # lat:
      # interests: eventually

      # create bounds from radius:
      # less than
      # Group.where("lng BETWEEN ? and ?", lng+r, lng-r)
      #   .where("lat BETWEEN ? and ?", lat+r, lat-r)


      # Foo.where(foo: 'bar').or.where(bar: 'bar') # use for interest filters
      Group.where("((lng - :lng) * (lng - :lng)) + ((lat - :lat) * (lat - :lat)) < :r * :r", {lng: lng, lat:lat, r: r})
        .where("title LIKE :querySearch", querySearch: "%#{querySearch}%")
  end


end
