# == Schema Information
#
# Table name: groups
#
#  id           :bigint(8)        not null, primary key
#  organizer_id :integer          not null
#  title        :string           not null
#  img_url      :string
#  city         :string           not null
#  description  :text             not null
#  lng          :float            not null
#  lat          :float            not null
#  private      :boolean          default(FALSE)
#

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

  has_many :events,
    foreign_key: :group_id,
    class_name: :Event

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
        .where("title iLIKE :querySearch OR description iLIKE :querySearch", querySearch: "%#{querySearch}%")

  end

  has_many :group_interest_relationships,
    foreign_key: :group_id,
    class_name: :GroupInterestRelationship

  has_many :interests,
    through: :group_interest_relationships,
    source: :interest
end
