# == Schema Information
#
# Table name: chats
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChatSerializer < ActiveModel::Serializer
  attributes :id, :title, :updated_at
  has_many :messages
end
