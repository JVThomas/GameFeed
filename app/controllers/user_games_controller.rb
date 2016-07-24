class UserGamesController < ApplicationController

	def index
		@user_games = UserGame.where(user_id: current_user.id)
		render json: @user_games
	end

end