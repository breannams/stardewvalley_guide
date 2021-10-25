class CreateHeartevents < ActiveRecord::Migration[6.1]
  def change
    create_table :heartevents do |t|
      t.belongs_to :villager, null: false, foreign_key: true
      t.integer :heart_number
      t.string :description

    end
  end
end
