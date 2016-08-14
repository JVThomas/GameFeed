require 'rails_helper'

describe 'GiantbombService' do
	before(:each) do
		@gb_service = GiantbombService.new
		@query = 'Street Fighter V'
		@url_id = "3030-48320"
	end

	it 'returns a list of games that closely match the query' do
		@results = @gb_service.games(@query)
		expect(@results["results"]).not_to eq(nil)
	end

	it 'returns a dscription of the query' do
		@result = @gb_service.game(@url_id)
		expect(@result["results"]["description"]).not_to eq(nil)
	end
end