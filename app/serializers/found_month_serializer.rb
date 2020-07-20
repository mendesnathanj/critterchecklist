class FoundMonthSerializer
  include FastJsonapi::ObjectSerializer

  set_type :found_months

  attributes :hemisphere, :collectible_type_normalized, :name

  belongs_to :collectible, polymorphic: true
end
