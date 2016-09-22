class UserGamesController < ApplicationController

	def index
		@user_games = UserGame.where(user_id: current_user.id)
		render json: @user_games
	end

	def create
		@user_game = UserGame.find_by(user_id: current_user.id, game_id: params[:game_id])
		!@user_game ? @user_game = UserGame.new(user_id: current_user.id, game_id: params[:game_id]) : @user_game
		if @user_game.save
			render json: @user_game
		else
			render json: @user_game.errors, status: 422
		end
	end

	def destroy
		@user_game = UserGame.find_by(user_id: current_user.id, id: params[:id])
		if @user_game.destroy
			render json: @user_game
		else
			render json: @user_game.errors, status: 422
		end	
	end

	def show
		@user_game = UserGame.find_by(user_id: current_user.id, game_id: params[:id])
		if @user_game
			render json: @user_game
		else
			render json: {}
		end
	end

end