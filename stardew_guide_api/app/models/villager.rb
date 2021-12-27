class Villager < ApplicationRecord
    belongs_to :stardewvalley
    has_one_attached :image
    has_many :heartevents
end
