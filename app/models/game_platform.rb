class GamePlatform < ActiveRecord::Base
  belongs_to :game
  belongs_to :platform

  validates :game_id, presence: true, uniqueness: {scope: :platform_id}
  validates :platform_id, presence: true
end
