class GamePlatform < ActiveRecord::Base
  belongs_to :game
  belongs_to :platform

  validates :game, presence: true, uniqueness: {scope: :platform}
  validates :platform, presence: true
end
