class GameGenre < ActiveRecord::Base
	belongs_to :game
	belongs_to :genre

	validates :game, presence: true, uniqueness: {scope: :genre}
	validates :genre, presence: true
end
