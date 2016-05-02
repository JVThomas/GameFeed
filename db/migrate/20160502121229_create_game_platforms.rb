class CreateGamePlatforms < ActiveRecord::Migration
  def change
    create_table :game_platforms do |t|
      t.integer :game_id
      t.integer :platform_id

      t.timestamps null: false
    end
  end
end
