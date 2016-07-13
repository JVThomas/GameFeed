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
  	@user_games = self.games
  	@user_feed = {}
  	set_services

  	@user_games.each do |game|
  		@title = game.title
  		@user_feed["#{@title}"] = {streams: @twitch_serivce.channels(@title), news: @bing_service.get_news(@title)}
  	end
  	@user_feed
  end

  private
  	def set_services
  		@gb_service ||= GiantbombService.new
  		@bing_service ||= BingService.new
  		@twitch_serivce ||= TwitchService.new	
  	end
end
