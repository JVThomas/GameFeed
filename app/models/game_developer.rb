class GameDeveloper < ActiveRecord::Base
	belongs_to :developer
	belongs_to :game
end