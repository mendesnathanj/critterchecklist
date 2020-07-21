class FossilPieceSerializer
  include FastJsonapi::ObjectSerializer

  set_key_transform :camel_lower
  cache_options enabled: true, cache_length: 1.days

  set_type :fossil_pieces

  attributes :name, :value

  belongs_to :multi_part_fossil
end
