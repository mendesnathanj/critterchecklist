class CreateFossilComponents < ActiveRecord::Migration[5.2]
  def change
    create_table :fossil_components do |t|
      t.string :name
      t.integer :value
      t.references :fossil, foreign_key: true

      t.timestamps
    end
  end
end
