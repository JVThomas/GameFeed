class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_year, :description, :giantbomb_id
  has_many :platforms
  has_many :developers
  has_many :genres
end
