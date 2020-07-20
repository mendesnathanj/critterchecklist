class SinglePartFossilSerializer
  include FastJsonapi::ObjectSerializer

  set_key_transform :camel_lower
  cache_options enabled: true, cache_length: 1.days

  set_type :single_part_fossils

  attributes :name, :value
end
