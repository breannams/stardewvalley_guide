class Stardewvalley < ApplicationRecord
    has_many :animals, :buildings, :bundles, :crops, :festivals, :fish, :minerals, :recipes, :shops, :trees, :villagers, :quests
end
