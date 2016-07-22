class GamesController < ApplicationController

	def index
		@user_feed = current_user.feed
		render json :@user_feed
	end

	def user_games
		@games = current_user.games
		render json :@games
	end

	def find_user_game
		@user_game = UserGame.where(user_id: current_user.id, giantbomb_id: params[:giantbomb_id])
		render json: @user_game
	end

end
