class SeaCreature < ApplicationRecord
  belongs_to :shadow
  belongs_to :swimming_pattern

  has_many :found_months, as: :collectible
  has_many :months, through: :found_months

  has_many :found_time_frames, as: :collectible
  has_many :time_frames, through: :found_time_frames

  has_one_attached :image
end
