class FossilPieceSerializer
  include FastJsonapi::ObjectSerializer

  set_type :fossil_pieces

  attributes :name, :value

  belongs_to :multi_part_fossil
end
