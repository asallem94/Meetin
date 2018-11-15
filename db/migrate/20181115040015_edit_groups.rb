class EditGroups < ActiveRecord::Migration[5.1]
  def change
    change_column :groups, :private, :boolean, default: false
  end
end
