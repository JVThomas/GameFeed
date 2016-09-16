class Game < ActiveRecord::Base
  has_many :user_games
  has_many :users, through: :user_games
  has_many :game_platforms
  has_many :platforms, through: :game_platforms
  has_many :game_developers
  has_many :developers, through: :game_developers
  has_many :game_genres
  has_many :genres, through: :game_genres
  validates :name, presence: true
  validates :giantbomb_id, presence: true, uniqueness: true

  def platforms=(platform_attributes)
  	platform_attributes.each do |plat_attr|
      platform_name = plat_attr["name"]
      if valid_attribute(platform_name)
        platform = Platform.find_or_create_by(name: platform_name)
        game_platform = self.game_platforms.find_by(platform_id: platform.id)
        if !game_platform
          game_platform = self.game_platforms.build(platform_id: platform.id)
        end
      end
    end
  end

  def developers=(developer_attributes)
  	developer_attributes.each do |dev_attr|
      dev_name = dev_attr["name"]
      if valid_attribute(dev_name)
        developer = Developer.find_or_create_by(name: dev_name)
        game_developer = self.game_developers.find_by(developer_id: developer.id)
        if !game_developer
          game_developer = self.game_developers.build(developer_id: developer.id)
        end
      end
    end
  end

  def genres=(genre_attributes)
    genre_attributes.each do |genre_attr|
      genre_name = genre_attr["name"]
      if valid_attribute(genre_name)
        genre = Genre.find_or_create_by(name: genre_name)
        game_genre = self.game_genres.find_by(genre_id: genre.id)
        if !game_genre
          game_genre = self.game_genres.build(genre_id: genre.id)
        end
      end
    end
  end

  def image=(image_attribute)
    if valid_attribute(image_attribute["icon_url"])
  	 self.image_link = image_attribute["icon_url"]
    end
  end

  private

  def valid_attribute(string)
    !string.blank?
  end
  
end
