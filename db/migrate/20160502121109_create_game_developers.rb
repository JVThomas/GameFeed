class CreateGameDevelopers < ActiveRecord::Migration
  def change
    create_table :game_developers do |t|
      t.integer :game_id
      t.integer :developer_id
      t.timestamps null: false
    end
  end
end
