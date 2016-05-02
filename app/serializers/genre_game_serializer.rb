class GenreGameSerializer < ActiveModel::Serializer
  attributes :id, :name, :year, :developer
end
