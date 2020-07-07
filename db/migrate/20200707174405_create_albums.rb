class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :name, null: false, unique: true
      t.boolean :live_only, null: false, default: false

      t.timestamps
    end
  end
end
