class AddDefaultHemisphereToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :hemisphere, :string, null: false, default: 'northern'
  end
end
