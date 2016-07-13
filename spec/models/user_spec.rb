require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'User model' do
  	it 'can generate a feed based on saved games' do
  		@game = FactoryGirl.create(:game, title: "Street Fighter V")
  		@user = FactoryGirl.create(:user)
  		@game_user = UserGame.create(user_id: @user.id, game_id: @game.id)
  		@feed = @user.feed
  		expect(@feed["Street Fighter V"][:streams]).not_to eql(nil)
  		expect(@feed["Street Fighter V"][:news]).not_to eql(nil)
  	end
  end
end
