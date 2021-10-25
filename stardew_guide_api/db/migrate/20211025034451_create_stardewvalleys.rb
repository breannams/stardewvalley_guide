class CreateStardewvalleys < ActiveRecord::Migration[6.1]
  def change
    create_table :stardewvalleys do |t|
      t.string :type
    end
  end
end
