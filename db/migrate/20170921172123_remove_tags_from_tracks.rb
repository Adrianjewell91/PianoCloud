class RemoveTagsFromTracks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :tags
  end
end
