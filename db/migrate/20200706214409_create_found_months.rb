class CreateFoundMonths < ActiveRecord::Migration[5.2]
  def change
    create_table :found_months do |t|
      t.references :collectible, polymorphic: true, index: true
      t.references :month, foreign_key: true
      t.string :hemisphere

      t.timestamps
    end
  end
end
