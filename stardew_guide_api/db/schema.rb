# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_26_232054) do

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.integer "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "animals", force: :cascade do |t|
    t.integer "stardewvalley_id", null: false
    t.string "name"
    t.integer "cost"
    t.string "produces"
    t.integer "sell_price"
    t.string "requirements"
    t.index ["stardewvalley_id"], name: "index_animals_on_stardewvalley_id"
  end

  create_table "buildings", force: :cascade do |t|
    t.integer "stardewvalley_id", null: false
    t.string "name"
    t.integer "cost"
    t.string "use"
    t.index ["stardewvalley_id"], name: "index_buildings_on_stardewvalley_id"
  end

  create_table "bundles", force: :cascade do |t|
    t.integer "stardewvalley_id", null: false
    t.string "room"
    t.string "room_reward"
    t.string "name"
    t.string "requirements"
    t.string "bundle_reward"
    t.index ["stardewvalley_id"], name: "index_bundles_on_stardewvalley_id"
  end

  create_table "crops", force: :cascade do |t|
    t.integer "stardewvalley_id", null: false
    t.string "name"
    t.integer "grow_time"
    t.integer "buy_price"
    t.integer "sell_price"
    t.string "restores"
    t.string "used_in"
    t.boolean "giant_crop"
    t.index ["stardewvalley_id"], name: "index_crops_on_stardewvalley_id"
  end

  create_table "festivals", force: :cascade do |t|
    t.integer "stardewvalley_id", null: false
    t.string "name"
    t.string "date"
    t.string "time_location"
    t.string "description"
    t.string "purchases"
    t.index ["stardewvalley_id"], name: "index_festivals_on_stardewvalley_id"
  end

  create_table "fish", force: :cascade do |t|
    t.integer "stardewvalley_id", null: false
    t.string "name"
    t.string "location"
    t.string "time"
    t.string "season"
    t.string "weather"
    t.string "difficulty"
    t.string "used_in"
    t.integer "sell_price"
    t.index ["stardewvalley_id"], name: "index_fish_on_stardewvalley_id"
  end

  create_table "heartevents", force: :cascade do |t|
    t.integer "villager_id", null: false
    t.integer "heart_number"
    t.string "description"
    t.boolean "completed"
    t.index ["villager_id"], name: "index_heartevents_on_villager_id"
  end

  create_table "minerals", force: :cascade do |t|
    t.integer "stardewvalley_id", null: false
    t.string "name"
    t.string "description"
    t.integer "sellprice"
    t.string "location"
    t.string "used_in"
    t.index ["stardewvalley_id"], name: "index_minerals_on_stardewvalley_id"
  end

  create_table "quests", force: :cascade do |t|
    t.integer "stardewvalley_id", null: false
    t.string "type"
    t.string "name"
    t.string "description"
    t.string "start_by"
    t.string "requirements"
    t.string "rewards"
    t.index ["stardewvalley_id"], name: "index_quests_on_stardewvalley_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.string "ingredients"
    t.string "restores"
    t.string "buffs"
    t.string "recipe_sources"
    t.string "loved_by"
    t.integer "stardewvalley_id", null: false
    t.index ["stardewvalley_id"], name: "index_recipes_on_stardewvalley_id"
  end

  create_table "shops", force: :cascade do |t|
    t.integer "stardewvalley_id", null: false
    t.string "name"
    t.string "open_hours"
    t.string "days_closed"
    t.string "inventory"
    t.string "extra_info"
    t.index ["stardewvalley_id"], name: "index_shops_on_stardewvalley_id"
  end

  create_table "stardewvalleys", force: :cascade do |t|
    t.string "name"
  end

  create_table "trees", force: :cascade do |t|
    t.string "name"
    t.integer "growth_time"
    t.string "season"
    t.integer "price"
    t.string "produces"
    t.integer "sell_price"
    t.integer "stardewvalley_id", null: false
    t.index ["stardewvalley_id"], name: "index_trees_on_stardewvalley_id"
  end

  create_table "villagers", force: :cascade do |t|
    t.integer "stardewvalley_id", null: false
    t.string "name"
    t.string "gifts"
    t.integer "heart_event_triggers"
    t.boolean "marriage"
    t.string "birthday"
    t.index ["stardewvalley_id"], name: "index_villagers_on_stardewvalley_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "animals", "stardewvalleys"
  add_foreign_key "buildings", "stardewvalleys"
  add_foreign_key "bundles", "stardewvalleys"
  add_foreign_key "crops", "stardewvalleys"
  add_foreign_key "festivals", "stardewvalleys"
  add_foreign_key "fish", "stardewvalleys"
  add_foreign_key "heartevents", "villagers"
  add_foreign_key "minerals", "stardewvalleys"
  add_foreign_key "quests", "stardewvalleys"
  add_foreign_key "recipes", "stardewvalleys"
  add_foreign_key "shops", "stardewvalleys"
  add_foreign_key "trees", "stardewvalleys"
  add_foreign_key "villagers", "stardewvalleys"
end
