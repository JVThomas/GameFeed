class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :original_release_date, :expected_release_year, :description, :giantbomb_id, :image_link
  has_many :platforms, serializer: SimplePlatformSerializer
  has_many :genres, serializer: SimpleGenreSerializer
  has_many :developers, serializer: SimpleDeveloperSerializer
end
