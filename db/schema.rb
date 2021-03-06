# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180107212811) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.integer "track_id", null: false
    t.integer "parent_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.string "genre"
    t.string "user_id", null: false
    t.string "track_recording_file_name", null: false
    t.string "track_recording_content_type", null: false
    t.integer "track_recording_file_size", null: false
    t.datetime "track_recording_updated_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "track_thumb_nail_file_name"
    t.string "track_thumb_nail_content_type"
    t.integer "track_thumb_nail_file_size"
    t.datetime "track_thumb_nail_updated_at"
    t.index ["title"], name: "index_tracks_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "name"
    t.string "email"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "thumb_nail_file_name"
    t.string "thumb_nail_content_type"
    t.integer "thumb_nail_file_size"
    t.datetime "thumb_nail_updated_at"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
