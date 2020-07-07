class CreateSinglePartFossils < ActiveRecord::Migration[5.2]
  def change
    create_table :single_part_fossils do |t|
      t.string :name, null: false, unique: true
      t.integer :value, null: false
      
      t.timestamps
    end
  end
end
