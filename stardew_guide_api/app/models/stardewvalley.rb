class Stardewvalley < ApplicationRecord
    has_many :animals, :bundles, :crops, :fish, :minerals, :recipes, :shops, :trees, :villagers, :quests
end
