class Animal < ApplicationRecord
  belongs_to :stardewvalley
  has_one_attached :image
end
