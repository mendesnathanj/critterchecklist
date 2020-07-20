class FoundCollectibleSerializer
  include FastJsonapi::ObjectSerializer

  set_type :found_collectibles

  attributes :collectible_id, :collectible_type, :status
end
