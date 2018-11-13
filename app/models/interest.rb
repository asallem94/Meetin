class Interest < ApplicationRecord
  validates :topic_titles, :picture_url, presence: true, uniqueness: true

end
