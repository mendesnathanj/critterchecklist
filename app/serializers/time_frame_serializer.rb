class TimeFrameSerializer
  include FastJsonapi::ObjectSerializer

  set_type :time_frames

  attributes :start, :end

  # has_many :collectibles, polymorphic: { Bug: 'bugs', Fish: 'fish' }
end
