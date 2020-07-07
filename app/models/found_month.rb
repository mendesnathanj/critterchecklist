class FoundMonth < ApplicationRecord
  belongs_to :collectible, polymorphic: true
  belongs_to :month
end
