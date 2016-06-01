class TwitchController < ApplicationController

  def channels
    binding.pry 
    twitch_service = TwitchService.new
    @result = twitch_service.channels(params[:title])
    binding.pry
    render json: @result
  end
  
end