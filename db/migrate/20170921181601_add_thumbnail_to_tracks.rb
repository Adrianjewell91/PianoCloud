class AddThumbnailToTracks < ActiveRecord::Migration[5.1]
  def change
    add_attachment :tracks, :track_thumb_nail 
  end
end
