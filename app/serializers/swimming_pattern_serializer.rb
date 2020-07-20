class SwimmingPatternSerializer
  include FastJsonapi::ObjectSerializer

  set_type :swimming_patterns

  attributes :pattern
end
