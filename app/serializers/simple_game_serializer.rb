class SimpleGameSerializer < ActiveModel:Serializer
	attributes :id, :name, :giantbomb_id, :original_release_date, :expected_release_year, :image
end