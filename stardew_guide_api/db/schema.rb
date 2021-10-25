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

ActiveRecord::Schema.define(version: 2021_10_25_041711) do

  create_table "animals", force: :cascade do |t|
    t.integer "stardewvalley_id", null: false
    t.string "name"
    t.integer "cost"
    t.string "produces"
    t.string "selling_price"
    t.string "requirements"
    t.index ["stardewvalley_id"], name: "index_animals_on_stardewvalley_id"
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

  create_table "fish", force: :cascade do |t|
    t.integer "stardewvalley_id", null: false
    t.string "name"
    t.string "location"
    t.string "time"
    t.string "season"
    t.string "weather"
    t.string "difficulty"
    t.string "used_in"
    t.index ["stardewvalley_id"], name: "index_fish_on_stardewvalley_id"
  end

  create_table "heartevents", force: :cascade do |t|
    t.integer "villager_id", null: false
    t.integer "heart_number"
    t.string "description"
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

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.string "ingredients"
    t.string "restores"
    t.string "buffs"
    t.string "recipe"
    t.string "sources"
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
    t.string "type"
  end

  create_table "trees", force: :cascade do |t|
    t.string "name"
    t.integer "growth_time"
    t.string "season"
    t.integer "price"
    t.string "produces"
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

  add_foreign_key "animals", "stardewvalleys"
  add_foreign_key "bundles", "stardewvalleys"
  add_foreign_key "crops", "stardewvalleys"
  add_foreign_key "fish", "stardewvalleys"
  add_foreign_key "heartevents", "villagers"
  add_foreign_key "minerals", "stardewvalleys"
  add_foreign_key "recipes", "stardewvalleys"
  add_foreign_key "shops", "stardewvalleys"
  add_foreign_key "trees", "stardewvalleys"
  add_foreign_key "villagers", "stardewvalleys"
end
