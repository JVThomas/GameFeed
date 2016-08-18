class PlatformSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :games, serializer: PlatformGameSerializer
end
