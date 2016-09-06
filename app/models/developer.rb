class Developer < ActiveRecord::Base
  has_many :game_developers
  has_many :games, through: :game_developers
  validates :name, presence: true
end
