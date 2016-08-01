class RemoveDeveloperIdFromGames < ActiveRecord::Migration
  def change
    remove_column :games, :developer_id, :string
  end
end
