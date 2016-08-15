class WelcomeController < ApplicationController
	def user_feed
		@user_feed = current_user.feed
		render json: @user_feed
	end
end