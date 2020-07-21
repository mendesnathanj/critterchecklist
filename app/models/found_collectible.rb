class FoundCollectible < ApplicationRecord
  belongs_to :user
  belongs_to :collectible, polymorphic: true

  def collectible_type_normalized
    collectible_type.downcase.pluralize
  end
end
