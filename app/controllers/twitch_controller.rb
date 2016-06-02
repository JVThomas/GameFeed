class TwitchController < ApplicationController

  def channels
    twitch_service = TwitchService.new
    @result = twitch_service.channels(params[:title])
    render json: @result
  end
  
end