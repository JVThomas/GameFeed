class GiantbombController < ApplicationController
  before_action :set_gb_service
  def games
    @results = @giantbomb.games(params[:query])
    render json: @results 
  end

  def game
    @result = @giantbomb.game(params[:data])
    render json: @result
  end

  private

  def set_gb_service
    @giantbomb ||= GiantbombService.new
  end
end