class UserGamesController < ApplicationController
	before_action :set_user_game, only: [:destroy, :show]

	def index
		@user_games = UserGame.where(user_id: current_user.id)
		render json: @user_games
	end

	def create
		!@user_game ? @user_game = UserGame.new(user_id: current_user, game_id: params[:id]) : @user_game
		if @user_game.save
			render json: @user_game
		else
			render json: @user_game.errors, status: 422
		end
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