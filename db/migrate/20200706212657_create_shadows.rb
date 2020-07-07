class CreateShadows < ActiveRecord::Migration[5.2]
  def change
    create_table :shadows do |t|
      t.string :size, null: false, unique: true
      
      t.timestamps
    end
  end
end
