class CreateFoundTimeFrames < ActiveRecord::Migration[5.2]
  def change
    create_table :found_time_frames do |t|
      t.references :collectible, polymorphic: true
      t.references :time_frame, foreign_key: true

      t.timestamps
    end
  end
end
