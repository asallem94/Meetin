class AddUserProperties < ActiveRecord::Migration[5.1]
  def change
    User.destroy_all
    add_column :users, :lng, :float, null:false
    add_column :users, :lat, :float, null:false
  end
end
