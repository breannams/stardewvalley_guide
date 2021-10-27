class CreateFestivals < ActiveRecord::Migration[6.1]
  def change
    create_table :festivals do |t|
      t.belongs_to :stardewvalley, null: false, foreign_key: true
      t.string :name
      t.string :date
      t.string :time_location
      t.string :description
      t.string :purchases
    end
  end
end
