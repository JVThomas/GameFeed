class Game < ActiveRecord::Base
  has_many :users
  has_many :genres
  has_many :platforms
  has_many :developers
end
