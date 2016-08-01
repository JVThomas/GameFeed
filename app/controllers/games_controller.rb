class GamesController < ApplicationController
	before_action :set_game, only: [:show, :update]

	def index
		@user_feed = current_user.feed
		render json: @user_feed
	end

	def create
		binding.pry
		@game = Game.new(game_params)
		@game.save
		render json: @game
	end

	def show
		render json: @game
	end

	def user_games
		@games = current_user.games
		render json: @games
	end

	def update
	end

	private

	def set_game
		@game = Game.find_by(giantbomb_id: params[:id])
	end

	def game_params
		params.require(:game).permit(:name, :description, :giantbomb_id, :expected_release_year, :original_release_date, 
									:platforms_attributes => [:name], :developers_attributes => [:name], :images_attributes => [:icon_url], 
									:genres_attributes => [:name]
		)
	end

end
