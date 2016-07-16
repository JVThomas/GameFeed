class GamesController < ApplicationController

	def index
		@user_feed = current_user.feed
		render json :@user_feed
	end

	def user_games
		@games = current_user.games
		render json :@games
	end

end
