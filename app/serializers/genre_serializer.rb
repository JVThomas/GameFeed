class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :genres, serializer: GenreGameSerializer
end
