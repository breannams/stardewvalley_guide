class Villager < ApplicationRecord
    belongs_to :stardewvalley
    has_many :heartevents
end
