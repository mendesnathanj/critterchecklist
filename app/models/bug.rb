class Bug < ApplicationRecord
  include Imageable

  self.per_page = 10

  belongs_to :location

  has_many :found_months, as: :collectible
  has_many :months, through: :found_months

  has_many :found_time_frames, as: :collectible
  has_many :time_frames, through: :found_time_frames

  has_many :found_collectibles, as: :collectible

  has_one_attached :image

  def northern_months
    months.where('found_months.hemisphere = ?', 'north')
  end

  def southern_months
    months.where('found_months.hemisphere = ?', 'south')
  end
end
