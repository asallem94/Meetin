class Interest < ApplicationRecord
  validates :topic_titles, :picture_url, presence: true, uniqueness: true

  has_many :event_interest_relationships,
    foreign_key: :interest_id,
    class_name: :EventInterestRelationship

  has_many :events,
    through: :event_interest_relationships,
    source: :event

  has_many :group_interest_relationships,
    foreign_key: :interest_id,
    class_name: :GroupInterestRelationship

  has_many :groups,
    through: :group_interest_relationships,
    source: :group

end
