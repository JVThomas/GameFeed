require 'pry'
class GamesController < ApplicationController
  before_action :set_user

  def create
    binding.pry
  end

  private

  def game_params
    params.require(:game).permit(:name, :release_year, :description, :giantbomb_id)
  end

end