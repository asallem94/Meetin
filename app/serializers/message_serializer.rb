class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :author_id, :created_at
end
