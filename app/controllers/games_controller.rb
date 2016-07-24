class GamesController < ApplicationController
	before_action :set_game, only: [:show, :update]

	def index
		@user_feed = current_user.feed
		render json: @user_feed
	end

	def create
		@game = Game.new(game_params)
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
		@game = Game.where(giantbomb_id: params[:giantbomb_id])
	end

end
