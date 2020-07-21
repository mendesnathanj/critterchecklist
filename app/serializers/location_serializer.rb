class LocationSerializer
  include FastJsonapi::ObjectSerializer

  set_key_transform :camel_lower
  cache_options enabled: true, cache_length: 1.days

  set_type :locations

  attributes :name
end
