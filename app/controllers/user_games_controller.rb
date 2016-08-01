class UserGamesController < ApplicationController
	before_action :set_user_game, only: [:destroy, :show]

	def index
		@user_games = UserGame.where(user_id: current_user.id)
		render json: @user_games
	end

	def destroy
		@user_game.destroy
		render json: @user_game	
	end

	def show
		render json: @user_game
	end

	private

	def set_user_game
		@user_game = UserGame.find_by(user_id: current_user.id, giantbomb_id: params[:id])
	end

end