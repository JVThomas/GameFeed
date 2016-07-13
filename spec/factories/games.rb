FactoryGirl.define do
  factory :game do
  	id 1
    title "Test title"
    giantbomb_id "3030-48320"
    original_release_date "Nov 30th, 2016"
    expected_release_date "test"
    developer_id 1
  end
end
