class ChatSerializer < ActiveModel::Serializer
  attributes :id, :title, :updated_at
  has_many :messages
end
