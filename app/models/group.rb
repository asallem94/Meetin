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
  def self.groups_by_filters(filters)
    r = (filters[:radi].to_i)/68.703
    lng = filters[:coord][:lng]
    lat = filters[:coord][:lat]
    querySearch = filters[:query]

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

      Group.where("((lng - :lng) * (lng - :lng)) + ((lat - :lat) * (lat - :lat)) < :r * :r", {lng: lng, lat:lat, r: r})
        .where("title LIKE :querySearch OR description LIKE :querySearch", querySearch: "%#{querySearch}%")

  end


end
