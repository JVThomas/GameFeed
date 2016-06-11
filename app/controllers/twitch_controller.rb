class TwitchController < ApplicationController

  before_action :set_service

  def channels
    @result = @twitch_service.channels(params[:title])
    render json: @result
  end

  def channel
    @result = @twitch_service.pagination(params[:page])
    render json: @result
  end

  private

  def set_service
    @twitch_service ||= TwitchService.new
  end
  
end