class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null:false
      t.text :description
      t.string :genre
      t.string :tags
      t.string :user_id, null: false
      t.attachment :track_recording, null: false

      t.timestamps
    end

    add_index :tracks, :title, unique: true
  end
end
