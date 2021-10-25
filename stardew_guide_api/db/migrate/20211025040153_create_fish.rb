class CreateFish < ActiveRecord::Migration[6.1]
  def change
    create_table :fish do |t|
      t.belongs_to :stardewvalley, null: false, foreign_key: true
      t.string :name
      t.string :location
      t.string :time
      t.string :season
      t.string :weather
      t.string :difficulty
      t.string :used_in

    end
  end
end
