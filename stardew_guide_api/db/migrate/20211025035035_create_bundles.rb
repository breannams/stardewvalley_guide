class CreateBundles < ActiveRecord::Migration[6.1]
  def change
    create_table :bundles do |t|
      t.belongs_to :stardewvalley, null: false, foreign_key: true
      t.string :room
      t.string :room_reward
      t.string :name
      t.string :requirements
      t.string :bundle_reward

    end
  end
end
