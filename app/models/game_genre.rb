class GameGenre < ActiveRecord::Base
	belongs_to :game
	belongs_to :genre

	validates :game_id, presence: true, uniqueness: {scope: :genre_id}
	validates :genre_id, presence: true
end
