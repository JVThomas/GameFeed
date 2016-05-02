class GameGenre < ActiveRecord::Base
  has_one :game
  has_one :genre
end
