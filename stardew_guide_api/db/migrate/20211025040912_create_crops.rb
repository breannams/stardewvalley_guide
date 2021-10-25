class CreateCrops < ActiveRecord::Migration[6.1]
  def change
    create_table :crops do |t|
      t.belongs_to :stardewvalley, null: false, foreign_key: true
      t.string :name
      t.integer :grow_time
      t.integer :buy_price
      t.integer :sell_price
      t.string :restores
      t.string :used_in
      t.boolean :giant_crop

    end
  end
end
