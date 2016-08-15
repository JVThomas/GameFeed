class Game < ActiveRecord::Base
  has_many :user_games
  has_many :users, through: :user_games
  has_many :game_platforms
  has_many :platforms, through: :game_platforms
  has_many :developers
  validates :name, presence: true
  validates :giantbomb_id, presence: true

  #need to test each setter overwrite
  def platforms=(platform_attributes)
  	platform_attributes.each do |plat_attr|
      platform_name = plat_attr["name"]
      if valid_attribute(platform_name)
        platform = Platform.find_or_create_by(name: platform_name)
        game_platform = self.game_platforms.where(id: platform.id).first
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
        game_developer = self.game_developers.where(id: developer.id).first
        if !game_developer
          game_developer = self.game_developers.build(developer_id: developer.id)
        end
      end
    end
  end

  def genre=(genre_attributes)
    genres_attributes.each do |genre_attr|
      genre_name = genre_attr["name"]
      if valid_attribute(genre_name)
        genre = Genre.find_or_create_by(name: genre_name)
        game_genre = self.game_genres.where(genre_id: genre.id).first
        if !game_genre
          game_genre = self.game_genres.build(genre_id: genre.id)
        end
      end
    end
  end

  def image=(image_link)
    if valid_attribute(image_link)
  	 self.image = image_link
    end
  end

  private

  def valid_attribute(string)
    return string != nil
  end
  
end
