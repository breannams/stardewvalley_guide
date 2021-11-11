class CreateTrees < ActiveRecord::Migration[6.1]
  def change
    create_table :trees do |t|
      t.string :name
      t.integer :growth_time
      t.string :season
      t.integer :price
      t.string :produces
      t.integer :sell_price
      t.belongs_to :stardewvalley, null: false, foreign_key: true

    end
  end
end
