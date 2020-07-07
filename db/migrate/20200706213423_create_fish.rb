class CreateFish < ActiveRecord::Migration[5.2]
  def change
    create_table :fish do |t|
      t.string :name
      t.integer :value
      t.references :location, foreign_key: true
      t.references :shadow, foreign_key: true

      t.timestamps
    end
  end
end
