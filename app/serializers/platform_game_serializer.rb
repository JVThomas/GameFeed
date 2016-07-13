class PlatformGameSerializer < ActiveModel::Serializer
  attributes :id, :title, :developer, :year
end
