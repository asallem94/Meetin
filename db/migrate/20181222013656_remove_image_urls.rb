class RemoveImageUrls < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :event_img_url, :string
    remove_column :groups, :img_url, :string
    remove_column :users, :profile_img_url, :string
  end
end
