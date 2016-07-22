class AddGiantbombIdToUserGame < ActiveRecord::Migration
  def change
    add_column :user_games, :giantbomb_id, :string
  end
end
