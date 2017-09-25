class DropCommentsToUsers < ActiveRecord::Migration[5.1]
  def change
    drop_table :comments_to_users
  end
end
