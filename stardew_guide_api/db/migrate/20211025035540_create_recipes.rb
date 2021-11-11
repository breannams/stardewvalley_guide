class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :ingredients
      t.string :restores
      t.string :buffs
      t.string :recipe_sources
      t.string :loved_by
      t.belongs_to :stardewvalley, null: false, foreign_key: true

    end
  end
end
