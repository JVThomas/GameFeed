class Game < ActiveRecord::Base
  has_many :user_games
  has_many :users, through: :user_games
  has_many :game_platforms
  has_many :platforms, through: :game_platforms
  has_many :developers
  validates :title, presence: true
  validates :giantbomb_id, presence: true

  def platforms_attributes=(platform_attributes)
  	#write up platforms_attrs, need to make join models as well
  end

  def developers_attributes(developers_attributes)
  	# write up developers_attrs, need to make join models as well
  end

  def genres_attributes=(genres_attributes)
  	# attrs and join models made here
  end

  def images_attributes=(image_attributes)
  	#no join models needed, just make sure correct image link is saved
  end

end
