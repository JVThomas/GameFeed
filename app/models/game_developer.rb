class GameDeveloper < ActiveRecord::Base
	belongs_to :developer
	belongs_to :game

	validates :game, presence: true, uniqueness: {scope: :developer}
	validates :developer, presence: true
end