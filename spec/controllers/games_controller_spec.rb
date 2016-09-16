require 'rails_helper'

RSpec.describe GamesController, type: :controller do
	before(:each) do
		user = FactoryGirl.create(:user)
		sign_in(user)
	end
	
	describe 'INDEX' do
		it 'returns games user is following' do
			game = FactoryGirl.create(:game)
			user_game = FactoryGirl.create(:user_game)
			get :index
			parsed_response = JSON.parse(response.body)
			expect(parsed_response.length).to eq(1)
			expect(parsed_response[0]["name"]).to eq("Test title")
		end
	end

	describe 'CREATE' do
		game_params = {
			name: "test",
			description: "description",
			giantbomb_id: "1111-111",
			expected_release_year: nil,
			original_release_date: "10/1/2013",
			platforms:[{name: "plat 1"},{name: "plat 2"}],
			developers: [{name: "dev 1"},{name: "dev 2"}],
			image:{icon_url: "url"},
			genres:[{name: "genre1"},{name: "genre2"}]
		}
		
		it 'creates a Game instance with validated parameters' do
			post :create, {game: game_params}
			parsed_response = JSON.parse(response.body)
			game = Game.all.last
			expect(game.developers.length).to eq(2)
			expect(game.platforms.length).to eq(2)
			expect(game.genres.length).to eq(2)

			parsed_response.each do |key, value|
				if parsed_response["#{key}"].kind_of?(Array)
					parsed_response["#{key}"].each_with_index do |elem, index|
						if key == "platforms"
							expect(game.platforms[index].name).to eq(elem["name"])
						elsif key == "developers"
							expect(game.developers[index].name).to eq(elem["name"])	
						elsif key == "genre"
							expect(game.genres[index].name).to eq(elem["name"])
						end	
					end
				else
					expect(game["#{key}"]).to eq(value)
				end
			end	
		end
		
		context 'data validation' do
			it 'does not create a game without a name' do
				invalid_params = game_params
				invalid_params["name"]= ""
				post :create, {game: invalid_params}
				expect(response.status).to eq(422)
			end
			it 'does not create a game without a giantbomb_id' do
				invalid_params = game_params
				invalid_params["giantbomb_id"] = ""
				post :create, {game: invalid_params}
				expect(response.status).to eq(422)
			end
		end
	end

	describe 'SHOW' do
		it 'retrieves game data based on giantbomb_id' do
			game = FactoryGirl.create(:game)
			get :show, {id:"3030-48320"}
			parsed_response = JSON.parse(response.body)
			expect(game.id).to eq(parsed_response["id"])
		end
	end

	describe 'UPDATE' do
		game_params = {
			name: "test",
			description: "description",
			giantbomb_id: "1111-111",
			expected_release_year: nil,
			original_release_date: "10/1/2013",
			platforms:[{name: "plat 1"},{name: "plat 2"}],
			developers: [{name: "dev 1"},{name: "dev 2"}],
			image:{icon_url: "url"},
			genres:[{name: "genre1"},{name: "genre2"}]
		}

		updated_game_params = {
			name: "new test",
			description: "new description",
			giantbomb_id: "1111-111",
			expected_release_year: nil,
			original_release_date: "10/1/2013",
			platforms:[{name: "plat 1"},{name: "plat 2"}],
			developers: [{name: "dev 1"},{name: "dev 2"}],
			image:{icon_url: "url"},
			genres:[{name: "genre1"},{name: "genre2"}]
		}

		before(:each) do
			post :create, {game: game_params}
			game = Game.all.last
			expect(game.name).to eq(game_params[:name])
		end

		after(:each) do
			Game.find_by(giantbomb_id: "1111-111").destroy
		end
		
		it 'updates and returns a game object' do
			post :update, {id: "1111-111", game: updated_game_params}
			parsed_response = JSON.parse(response.body)
			game = Game.all.last
			expect(game.name).to eq(parsed_response["name"])
			expect(game.name).not_to eq(game_params[:name])
		end

		context 'data validation' do
			it 'does not update wihtout a name' do
				test_game = {game: updated_game_params}
				test_game["name"] = ""
				post :update, {id: "1111-111", game: test_game}
				parsed_response = JSON.parse(response.body)
				game = Game.all.last
				expect(response.status).to eq(422)
			end
			
			it 'does not update without a giantbomb_id' do
				test_game = {game: updated_game_params}
				test_game["giantbomb_id"] = ""
				post :update, {id: "1111-111", game: test_game}
				parsed_response = JSON.parse(response.body)
				game = Game.all.last
				expect(response.status).to eq(422)
			end
		end
	end
end
