class TimeFrameSerializer
  include FastJsonapi::ObjectSerializer

  set_key_transform :camel_lower
  cache_options enabled: true, cache_length: 1.days

  set_type :time_frames

  attributes :start, :end

  # has_many :collectibles, polymorphic: { Bug: 'bugs', Fish: 'fish' }
end
