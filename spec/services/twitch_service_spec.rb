require 'rails_helper'

describe 'TwitchService' do 
	before(:each) do
		@twitch = TwitchService.new
		@streams = @twitch.channels('Street Fighter V')
	end

	it 'returns a list of channels related to query' do
		expect(@streams["streams"].length).not_to eql(0)
	end

	context 'pagination' do 
		
		before(:each) do 
			@next_link = @streams["_links"]["next"]
			@next_streams = @twitch.pagination(@next_link)
		end
		
		it 'returns links for the next 10 links' do
			expect(@next_streams["streams"].length).not_to eql(0)
			expect(@next_streams).not_to eq(@streams)
		end

		it 'returns links for the previous 10 links' do
			prev_link = @next_streams["_links"]["prev"]
			@prev_streams = @twitch.pagination(prev_link)
			
			expect(@prev_streams["streams"].length).not_to eql(0)
			expect(@prev_streams).not_to eq(@next_streams)
		end
	end
end