class FoundMonthSerializer
  include FastJsonapi::ObjectSerializer

  set_key_transform :camel_lower
  cache_options enabled: true, cache_length: 1.days

  set_type :found_months

  attributes :hemisphere, :collectible_type_normalized, :name

  belongs_to :collectible, polymorphic: true
end
