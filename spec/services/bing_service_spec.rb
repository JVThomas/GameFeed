require 'rails_helper'

describe 'BingService' do
	before(:each) do
		@bing = BingService.new
		@query = 'Street Fighter V'
	end

	it 'returns  a list of the latest news headlines related to query' do
		@news = @bing.get_news(@query)
		expect(@news["d"]["results"][0]["News"].length).not_to eq(0)
	end
	
end