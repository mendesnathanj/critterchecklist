class SeaCreatureSerializer
  include FastJsonapi::ObjectSerializer

  set_key_transform :camel_lower
  cache_options enabled: true, cache_length: 1.days

  set_type :sea_creatures

  attributes :name, :value

  link :image_url

  belongs_to :shadow
  belongs_to :swimming_pattern
  has_many :found_months
  has_many :time_frames
end
