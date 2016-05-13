class GiantbombController < ApplicationController
  def search
    giantbomb = GiantbombService.new
    @results = giantbomb.games(params[:query])
    render json: @results 
  end
end