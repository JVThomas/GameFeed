class GameDeveloper < ActiveRecord::Base
	belongs_to :developer
	belongs_to :game

	validates :game_id, presence: true, uniqueness: {scope: :developer_id}
	validates :developer_id, presence: true
end