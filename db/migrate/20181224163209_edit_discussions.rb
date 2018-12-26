class EditDiscussions < ActiveRecord::Migration[5.2]
  def change
    add_column :discussions, :author_id, :integer
    add_column :comments, :author_id, :integer
  end
end
