class AddUserIdAndTrackIdToComments < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :user_id, :integer, null:false 
    add_column :comments, :track_id, :integer, null:false
  end
end
