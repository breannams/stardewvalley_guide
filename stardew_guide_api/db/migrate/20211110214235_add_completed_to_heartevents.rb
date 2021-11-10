class AddCompletedToHeartevents < ActiveRecord::Migration[6.1]
  def change
    add_column :heartevents, :completed, :boolean
  end
end
