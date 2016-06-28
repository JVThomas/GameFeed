require 'rails_helper'

RSpec.describe Game, type: :model do
  it 'has a valid factory' do
    expect(FactoryGirl.build(:game)).to be_valid
  end

  it 'is invalid without a title' do
    expect(FactoryGirl.build(:game, title:"")).to be_invalid
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
end
