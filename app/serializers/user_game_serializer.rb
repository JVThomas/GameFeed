class UserGameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id
  belongs_to :game, serializer: SimpleGameSerializer
end
