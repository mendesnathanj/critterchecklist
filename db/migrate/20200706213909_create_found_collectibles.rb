class CreateFoundCollectibles < ActiveRecord::Migration[5.2]
  def change
    create_table :found_collectibles do |t|
      t.references :user, foreign_key: true
      t.references :collectible, polymorphic: true, index: true
      t.string :status

      t.timestamps
    end
  end
end
