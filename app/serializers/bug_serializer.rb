class BugSerializer
  include FastJsonapi::ObjectSerializer

  set_key_transform :camel_lower
  cache_options enabled: true, cache_length: 1.days

  set_type :bugs

  attributes :name, :value, :image_url

  attribute :months, &:found_month_ids
  attribute :time_frames, &:time_frame_ids
  attribute :location, &:location_id

  belongs_to :location
  has_many :found_months
  has_many :time_frames
end
