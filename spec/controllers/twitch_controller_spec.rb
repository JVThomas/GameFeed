require 'rails_helper'

RSpec.describe Api::V1::TwitchController, type: :controller do
	
	describe 'GET channels' do
		it 'returns a list of 10 channels based on a query' do
			user = FactoryGirl.create(:user)
			sign_in(user)
			get :channels, {title: 'Street Fighter V'}
			parsed_response = JSON.parse(response.body)
			expect(parsed_response["_total"]).to_not eq(nil)
		end
	end

	describe 'GET pagination' do
		it 'returns the next set of streams pased on next/prev url' do
			user = FactoryGirl.create(:user)
			sign_in(user)
			get :pagination, {link: 'https://api.twitch.tv/kraken/search/streams?limit=10&offset=10&query=%22Street+Fighter+V%22'}
			parsed_response = JSON.parse(response.body)
			expect(parsed_response["_total"]).to_not eq(nil)
		end
	end
end
