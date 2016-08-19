class UserGame < ActiveRecord::Base
  belongs_to :user
  belongs_to :game

  validates :game_id, presence: true, uniqueness: {scope: :user_id}
  validates :user_id, presence: true
end
