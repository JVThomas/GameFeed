FactoryGirl.define do
  factory :game do
    title "Test title"
    giantbomb_id "2456-9320"
    original_release_date "Nov 30th, 2016"
    expected_release_date "test"
    developer_id 1
  end
end
