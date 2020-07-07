class CreateFossilPieces < ActiveRecord::Migration[5.2]
  def change
    create_table :fossil_pieces do |t|
      t.string :name, null: false
      t.integer :value, null: false
      t.references :multi_part_fossil, foreign_key: true

      t.timestamps
    end
  end
end
