class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :original_release_year, :expected_release_year, :description, :giantbomb_id, :image
  has_many :platforms, serializer: SimplePlatformSerializer
  has_many :developers, serializer: SimpleDeveloperSerializer
  has_many :genres, serializer: SimpleGenreSerializer
end
