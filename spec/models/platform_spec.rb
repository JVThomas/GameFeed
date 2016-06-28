require 'rails_helper'

RSpec.describe Platform, type: :model do
  it 'has a valid factory' do
    expect(FactoryGirl.build(:platform)).to be_valid
  end

  it 'is invalid without a name' do
    expect(FactoryGirl.build(:platform, name:"")).to be_invalid
  end
end
