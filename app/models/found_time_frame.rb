class FoundTimeFrame < ApplicationRecord
  belongs_to :collectible, polymorphic: true
  belongs_to :time_frame
end
