class CreateMultiPartFossils < ActiveRecord::Migration[5.2]
  def change
    create_table :multi_part_fossils do |t|
      t.string :name, null: false, unique: true
      
      t.timestamps
    end
  end
end
