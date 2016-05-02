class Genre < ActiveRecord::Base
  has_many :games
end
