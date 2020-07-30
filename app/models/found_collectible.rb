class FoundCollectible < ApplicationRecord
  belongs_to :user
  belongs_to :collectible, polymorphic: true

  before_create :set_found
  before_update :set_donated

  def collectible_type_normalized
    collectible_type.downcase.pluralize
  end

  def set_found
    self.status = 'Found'
  end

  def set_donated
    self.status = 'Donated'
  end
end
