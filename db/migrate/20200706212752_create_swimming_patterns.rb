class CreateSwimmingPatterns < ActiveRecord::Migration[5.2]
  def change
    create_table :swimming_patterns do |t|
      t.string :pattern, null: false, unique: true

      t.timestamps
    end
  end
end
