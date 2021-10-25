class CreateVillagers < ActiveRecord::Migration[6.1]
  def change
    create_table :villagers do |t|
      t.belongs_to :stardewvalley, null: false, foreign_key: true
      t.string :name
      t.string :gifts
      t.integer :heart_event_triggers
      t.boolean :marriage
      t.string :birthday

    end
  end
end
