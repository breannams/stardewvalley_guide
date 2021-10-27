class CreateBuildings < ActiveRecord::Migration[6.1]
  def change
    create_table :buildings do |t|
      t.belongs_to :stardewvalley, null: false, foreign_key: true
      t.string :name
      t.integer :cost
      t.string :use
    end
  end
end
