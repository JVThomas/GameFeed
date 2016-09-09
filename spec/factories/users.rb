FactoryGirl.define do
  factory :user do
    id 1
    username 'username'
    email 'email@aol.com'
    password 'password12345'
    password_confirmation 'password12345'
  end
end
