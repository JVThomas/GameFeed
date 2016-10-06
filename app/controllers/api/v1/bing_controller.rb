module Api::V1
	class BingController < ApplicationController
	  def news
	    bing = BingService.new
	    @result = bing.get_news(params[:title])
	    render json: @result
	  end
	end
end