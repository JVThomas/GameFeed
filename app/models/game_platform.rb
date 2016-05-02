class GamePlatform < ActiveRecord::Base
  has_one :game
  has_one :platform
end
