class AddThumbnailToUser < ActiveRecord::Migration[5.1]
  def change
    add_attachment :users, :thumb_nail
  end
end
