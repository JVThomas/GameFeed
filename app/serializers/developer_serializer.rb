class DeveloperSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :games, serializer: DeveloperGameSerializer
end
