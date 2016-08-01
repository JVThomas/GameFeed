class ChangeTitleToName < ActiveRecord::Migration
  def change
  	rename_column :games, :title, :name
  end
end
