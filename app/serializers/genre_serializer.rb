class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :games, serializer: GenreGameSerializer
end
