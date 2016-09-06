class GamesController < ApplicationController
	before_action :set_game, only: [:show, :update]

	def index
		@games = current_user.games
		render json: @games
	end

	def create
		@game = Game.new(game_params)
		if @game.save
			render json: @game
		else
			render json: @game.errors, status: 422
		end
	end

	def show
		render json: @game
	end

	def update
		if @game.update(game_params)
			render json: @game 
		else
			render json: @games.errors, status: 422
		end
	end

	private

	def set_game
		@game = Game.find_by(giantbomb_id: params[:id])
	end

	def game_params
		params.require(:game).permit(:name, :description, :giantbomb_id, :expected_release_year, :original_release_date, 
									:platforms => [:name], :developers => [:name], :image => [:icon_url], 
									:genres => [:name]
		)
	end

end
