class GameDeveloper < ActiveRecord::Base
  has_one :game
  has_one :developer
end
