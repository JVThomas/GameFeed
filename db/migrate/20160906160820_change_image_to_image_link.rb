class ChangeImageToImageLink < ActiveRecord::Migration
  def change
  	rename_column :games, :image, :image_link
  end
end
