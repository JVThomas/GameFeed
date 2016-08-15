class ChangeExpectedReleaseDateToExpectedReleaseYear < ActiveRecord::Migration
  def change
  	rename_column :games, :expected_release_date, :expected_release_year
  end
end
