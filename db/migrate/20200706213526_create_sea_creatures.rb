class CreateSeaCreatures < ActiveRecord::Migration[5.2]
  def change
    create_table :sea_creatures do |t|
      t.string :name
      t.integer :value
      t.references :shadow, foreign_key: true
      t.references :swimming_pattern, foreign_key: true

      t.timestamps
    end
  end
end
