class ChangeImageLinkToImage < ActiveRecord::Migration
  def change
  	rename_column :games, :image_link, :image
  end
end
