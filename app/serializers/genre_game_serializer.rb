class GenreGameSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :developer
end
