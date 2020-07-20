class FoundMonth < ApplicationRecord
  belongs_to :collectible, polymorphic: true
  belongs_to :month

  def name
    month.name
  end

  def collectible_type_normalized
    collectible_type.downcase.pluralize
  end
end
