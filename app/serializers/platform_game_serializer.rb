class PlatformGameSerializer < ActiveModel::Serializer
  attributes :id, :name, :developer, :year
end
