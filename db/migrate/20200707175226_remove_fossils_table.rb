class RemoveFossilsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :fossil_components
    drop_table :fossils
  end
end
