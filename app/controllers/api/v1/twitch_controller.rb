module Api::V1
  class TwitchController < ApplicationController

    before_action :set_twitch_service

    def channels
      @result = @twitch_service.channels(params[:title], params[:limit])
      render json: @result
    end

    def pagination
      @result = @twitch_service.pagination(params[:link])
      render json: @result
    end

    private

    def set_twitch_service
      @twitch_service ||= TwitchService.new
    end
    
  end
end