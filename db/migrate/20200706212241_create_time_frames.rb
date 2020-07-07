class CreateTimeFrames < ActiveRecord::Migration[5.2]
  def change
    create_table :time_frames do |t|
      t.integer :start, null: false
      t.integer :end, null: false
      
      t.timestamps
    end
  end
end
