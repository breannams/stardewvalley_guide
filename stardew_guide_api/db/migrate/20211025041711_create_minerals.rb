class CreateMinerals < ActiveRecord::Migration[6.1]
  def change
    create_table :minerals do |t|
      t.belongs_to :stardewvalley, null: false, foreign_key: true
      t.string :name
      t.string :description
      t.integer :sellprice
      t.string :location
      t.string :used_in

    end
  end
end
