class LocationSerializer
  include FastJsonapi::ObjectSerializer

  set_type :locations

  attributes :name
end
