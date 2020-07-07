class FoundCollectible < ApplicationRecord
  belongs_to :user
  belongs_to :collectible, polymorphic: true
end
