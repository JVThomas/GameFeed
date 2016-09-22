class UserGameSerializer < ActiveModel::Serializer
  attributes :id, :giantbomb_id, :user_id, :game_id
end
