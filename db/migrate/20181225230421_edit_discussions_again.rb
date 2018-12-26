class EditDiscussionsAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :discussions, :group_id, :integer
  end
end
