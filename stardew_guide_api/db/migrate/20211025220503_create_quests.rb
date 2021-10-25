class CreateQuests < ActiveRecord::Migration[6.1]
  def change
    create_table :quests do |t|
      t.belongs_to :stardewvalley, null: false, foreign_key: true
      t.string :type
      t.string :name
      t.string :description
      t.string :start_by
      t.string :requirements
      t.string :rewards

    end
  end
end
