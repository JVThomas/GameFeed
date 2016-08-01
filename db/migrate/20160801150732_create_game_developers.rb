class CreateGameDevelopers < ActiveRecord::Migration
  def change
    create_table :game_developers do |t|
      t.integer :game_id
      t.integer :developer_id
    end
  end
end
