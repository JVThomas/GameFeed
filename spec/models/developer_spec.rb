require 'rails_helper'

RSpec.describe Developer, type: :model do
  it 'has a valid factory' do
    expect(FactoryGirl.create(:developer)).to be_valid
  end

  it 'is invalid without a name' do
    expect(FactoryGirl.build(:developer, name:"")).to be_invalid
  end
end
