class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :giantbomb_id
      t.string :original_release_date, default: ""
      t.string :expected_release_date, default: ""
      t.string :image_link, default: ""
      t.string :developer_id
      t.timestamps null: false
    end
  end
end
