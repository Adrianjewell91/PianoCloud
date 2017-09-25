class CreateCommentsToUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :comments_to_users do |t|
      t.string :comment_id, null: false
      t.string :user_id, null: false
    end
    
    add_index :comments_to_users, :comment_id
    add_index :comments_to_users, :user_id
  end
end
