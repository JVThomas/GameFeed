class GenreGameSerializer < ActiveModel::Serializer
  attributes :id, :name, :original_release_date, :expected_release_year, :developer, :giantbomb_id, :image
  has_many :platforms, serialier: SimplePlatformSerializer
  has_many :developers, serializer: SimpleDeveloeprSerializer
end
