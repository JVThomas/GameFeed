require 'rails_helper'

describe 'TwitchService' do 
	before(:each) do
		@twitch = TwitchService.new
		@streams = @twitch.channels('Street Fighter V')
	end

	it 'returns a list of channels related to query' do
		expect(@streams["streams"].length).not_to eql(0)
	end

	it 'returns links for the previous 10 and following 10 links' do
		next_link = @streams["_links"]["next"]
		new_streams = @twitch.pagination(next_link)

		expect(new_streams["streams"].length).not_to eql(0)
		expect(new_streams).not_to eq(@streams)
	end
	
end