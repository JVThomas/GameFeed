require 'rails_helper'

RSpec.describe Game, type: :model do
  it 'has a valid factory' do
    expect(FactoryGirl.build(:game)).to be_valid
  end

  it 'is invalid without a title' do
    expect(FactoryGirl.build(:game, name:"")).to be_invalid
  end

  it 'is invalid without a giantbomb id' do
    expect(FactoryGirl.build(:game,giantbomb_id: "")).to be_invalid
  end

  it 'can have a original release date' do
    expect(FactoryGirl.build(:game).original_release_date).to eql("Nov 30th, 2016")
  end

  it 'can have an expected release date' do
    expect(FactoryGirl.build(:game).expected_release_date).to eql("test")
  end

  context('Testing overwriting setters') do
    before(:each) do
      var game_attributes = { 
        game: {
          id:1
          name: "Test title"
          giantbomb_id: "3030-48320"
          original_release_date: "Nov 30th, 2016"
          expected_release_date: "test"
          developers:[{name: "Capcom"},{name: "Dimps"}]
          genres: [{name: "Fighting"}]
          image: {icon_url: "test link"}
          platforms: [{name:"PS4"}, {name:"Xbox One"}]
        }
      }
    end

    it('should create a game with validated game_attributes') do
      
    end
  end
end
