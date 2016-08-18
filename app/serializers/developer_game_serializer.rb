class DeveloperGameSerializer < ActiveModel::Serializer
  attributes :id, :name, :original_release_date, :expected_release_year, :giantbomb_id, :image
  has_many :platforms, serializer: SimplePlatformSerializer
  has_many :genres, serializer: SimpleGenreSerializer
end
