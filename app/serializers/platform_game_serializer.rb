class PlatformGameSerializer < ActiveModel::Serializer
  attributes :id, :name, :original_release_date, :expected_release_year, :giantbomb_id, :image
  has_many :developers, serializer: SimpleDeveloperSerializer
  has_many :genres, serializer: SimpleGenreSerializer
end
