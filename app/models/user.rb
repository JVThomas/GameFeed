class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :trackable, :validatable
  has_many :user_games
  has_many :games, through: :user_games
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true

  def feed
  	user_feed = {}
  	set_services

  	self.games.each do |game|
  		name = game.name
  		user_feed["#{name}"] = {streams: @twitch_serivce.channels(name), news: @bing_service.get_news(name)}
  	end
  	user_feed
  end

  private
  	def set_services
  		@gb_service ||= GiantbombService.new
  		@bing_service ||= BingService.new
  		@twitch_serivce ||= TwitchService.new	
  	end
end
