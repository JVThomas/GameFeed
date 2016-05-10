class GiantbombController < ApplicationController
  def giantbomb
    gb_service = GianbombService.new
    @results = gb_service.games(params[:query])
    render json: @results 
  end
end