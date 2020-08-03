class ChangeHemisphereColumnInUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :hemisphere, :string, null: false, default: 'north'
    User.update_all(hemisphere: 'north')
  end
end
