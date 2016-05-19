class GiantbombController < ApplicationController
  def games
    giantbomb = GiantbombService.new
    @results = giantbomb.games(params[:query])
    render json: @results 
  end

  def game
    giantbomb = GiantbombService.new
    @result = giantbomb.game(params[:url])
    render json: @result
  end
end