class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_year, :description, :giantbomb_id
  has_many :platforms
  has_many :developers
  has_many :genres
end
