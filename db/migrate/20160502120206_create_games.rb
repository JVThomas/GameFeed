class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.integer :release_year
      t.string :description
      t.timestamps null: false
      t.integer :giantbomb_id
    end
  end
end
