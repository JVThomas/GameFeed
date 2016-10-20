require 'rails_helper'

RSpec.describe Api::V1::BingController, type: :controller do
	describe 'GET news' do
		it 'returns latest news stories in JSON format' do
			user = FactoryGirl.create(:user)
			sign_in(user)
			get :news, {title: 'Street Fighter V'}
			parsed_response = JSON.parse(response.body)
			expect(parsed_response["d"]["results"][0]["News"]).not_to eq(nil)
		end
	end
end
