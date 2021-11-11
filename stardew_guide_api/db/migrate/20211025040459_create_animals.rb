class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :animals do |t|
      t.belongs_to :stardewvalley, null: false, foreign_key: true
      t.string :name
      t.integer :cost
      t.string :produces
      t.integer :sell_price
      t.string :requirements

    end
  end
end
