class FoundCollectibleSerializer
  include FastJsonapi::ObjectSerializer

  set_key_transform :camel_lower
  set_type :found_collectibles

  attributes :id, :collectible_id, :collectible_type_normalized, :status
end
