class GameUser < ActiveRecord::Base
  has_one :user
  has_one :game
end
