class CreateGameGenres < ActiveRecord::Migration
  def change
    create_table :game_genres do |t|
      t.integer :game_id
      t.integer :genre_id

      t.timestamps null: false
    end
  end
end
