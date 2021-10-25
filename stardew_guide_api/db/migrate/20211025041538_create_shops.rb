class CreateShops < ActiveRecord::Migration[6.1]
  def change
    create_table :shops do |t|
      t.belongs_to :stardewvalley, null: false, foreign_key: true
      t.string :name
      t.string :open_hours
      t.string :days_closed
      t.string :inventory
      t.string :extra_info

    end
  end
end
