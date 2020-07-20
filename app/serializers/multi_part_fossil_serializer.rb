class MultiPartFossilSerializer
  include FastJsonapi::ObjectSerializer

  set_key_transform :camel_lower
  cache_options enabled: true, cache_length: 1.days

  set_type :multi_part_fossils

  attributes :name

  has_many :fossil_pieces
end
