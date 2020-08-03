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

ActiveRecord::Schema.define(version: 2020_08_01_212309) do

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

  create_table "albums", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "live_only", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bugs", force: :cascade do |t|
    t.string "name"
    t.integer "value"
    t.bigint "location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_bugs_on_location_id"
  end

  create_table "fish", force: :cascade do |t|
    t.string "name"
    t.integer "value"
    t.bigint "location_id"
    t.bigint "shadow_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_fish_on_location_id"
    t.index ["shadow_id"], name: "index_fish_on_shadow_id"
  end

  create_table "fossil_pieces", force: :cascade do |t|
    t.string "name", null: false
    t.integer "value", null: false
    t.bigint "multi_part_fossil_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["multi_part_fossil_id"], name: "index_fossil_pieces_on_multi_part_fossil_id"
  end

  create_table "found_collectibles", force: :cascade do |t|
    t.bigint "user_id"
    t.string "collectible_type"
    t.bigint "collectible_id"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["collectible_type", "collectible_id"], name: "index_found_collectibles_on_collectible_type_and_collectible_id"
    t.index ["user_id"], name: "index_found_collectibles_on_user_id"
  end

  create_table "found_months", force: :cascade do |t|
    t.string "collectible_type"
    t.bigint "collectible_id"
    t.bigint "month_id"
    t.string "hemisphere"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["collectible_type", "collectible_id"], name: "index_found_months_on_collectible_type_and_collectible_id"
    t.index ["month_id"], name: "index_found_months_on_month_id"
  end

  create_table "found_time_frames", force: :cascade do |t|
    t.string "collectible_type"
    t.bigint "collectible_id"
    t.bigint "time_frame_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["collectible_type", "collectible_id"], name: "index_found_time_frames_on_collectible_type_and_collectible_id"
    t.index ["time_frame_id"], name: "index_found_time_frames_on_time_frame_id"
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti"
    t.datetime "exp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "months", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "multi_part_fossils", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sea_creatures", force: :cascade do |t|
    t.string "name"
    t.integer "value"
    t.bigint "shadow_id"
    t.bigint "swimming_pattern_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shadow_id"], name: "index_sea_creatures_on_shadow_id"
    t.index ["swimming_pattern_id"], name: "index_sea_creatures_on_swimming_pattern_id"
  end

  create_table "shadows", force: :cascade do |t|
    t.string "size", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "single_part_fossils", force: :cascade do |t|
    t.string "name", null: false
    t.integer "value", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "swimming_patterns", force: :cascade do |t|
    t.string "pattern", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "time_frames", force: :cascade do |t|
    t.integer "start", null: false
    t.integer "end", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "hemisphere", default: "north", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "bugs", "locations"
  add_foreign_key "fish", "locations"
  add_foreign_key "fish", "shadows"
  add_foreign_key "fossil_pieces", "multi_part_fossils"
  add_foreign_key "found_collectibles", "users"
  add_foreign_key "found_months", "months"
  add_foreign_key "found_time_frames", "time_frames"
  add_foreign_key "sea_creatures", "shadows"
  add_foreign_key "sea_creatures", "swimming_patterns"
end
