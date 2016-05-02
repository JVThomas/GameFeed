class PlatformSerializer < ActiveModel::Serializer
  attributes :id
  has_many :games, serializer: PlatformGameSerializer
end
