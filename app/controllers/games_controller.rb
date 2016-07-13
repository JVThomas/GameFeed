class GamesController < ApplicationController

	def index
		@user_feed = current_user.feed
		render json :@user_feed
	end

end
