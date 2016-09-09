require 'rails_helper'

RSpec.describe GiantbombController, type: :controller do
	
	describe 'GET games' do
		it 'returns a list of games in JSON format' do
			user = FactoryGirl.create(:user)
			sign_in(user)
			get :games, {query: 'Street Fighter V'}
			parsed_response = JSON.parse(response.body)
			expect(parsed_response["error"]).to eq("OK")
		end
	end

	describe 'GET game' do
		it 'returns details about a specific video game' do
			user = FactoryGirl.create(:user)
			sign_in(user)
			get :game, {data: '3030-48320'}
			parsed_response = JSON.parse(response.body)
			expect(parsed_response["error"]).to eq("OK")
		end
	end
end
