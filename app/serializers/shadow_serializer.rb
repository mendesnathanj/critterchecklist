class ShadowSerializer
  include FastJsonapi::ObjectSerializer

  set_type :shadows
  
  attributes :size
end
