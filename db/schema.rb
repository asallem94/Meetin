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

ActiveRecord::Schema.define(version: 2018_11_25_015008) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "chat_user_relationships", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "chat_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "chats", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "event_rsvps", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "event_id", null: false
    t.boolean "rsvp", default: false
    t.index ["user_id", "event_id"], name: "index_event_rsvps_on_user_id_and_event_id", unique: true
  end

  create_table "events", force: :cascade do |t|
    t.integer "host_id", null: false
    t.integer "group_id", null: false
    t.string "title", null: false
    t.string "event_img_url"
    t.string "address", null: false
    t.string "city", null: false
    t.string "detail", null: false
    t.float "lng", null: false
    t.float "lat", null: false
    t.datetime "start_date", null: false
    t.datetime "end_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "private", default: false
    t.float "price", default: 0.0
    t.index ["group_id"], name: "index_events_on_group_id"
    t.index ["host_id"], name: "index_events_on_host_id"
  end

  create_table "group_memberships", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "group_id", null: false
    t.index ["user_id", "group_id"], name: "index_group_memberships_on_user_id_and_group_id", unique: true
  end

  create_table "groups", force: :cascade do |t|
    t.integer "organizer_id", null: false
    t.string "title", null: false
    t.string "img_url"
    t.string "city", null: false
    t.text "description", null: false
    t.float "lng", null: false
    t.float "lat", null: false
    t.boolean "private", default: false
  end

  create_table "interests", force: :cascade do |t|
    t.string "topic_titles", null: false
    t.string "picture_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "chat_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "name", null: false
    t.string "profile_img_url"
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "lng", null: false
    t.float "lat", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
