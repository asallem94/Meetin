class CreateGroupMemberships < ActiveRecord::Migration[5.1]

  def change
    drop_table :groups

    create_table :groups do |t|
      t.integer :organizer_id, null: false
      t.string :title, null: false
      t.string :img_url
      t.string :city, null: false
      t.text :description, null: false
      t.float :lng, null: false
      t.float :lat, null: false
      t.boolean :private, :default => false
    end

    create_table :group_memberships do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false
      t.timestamp
    end
    add_index :group_memberships, [:user_id, :group_id], unique: true
  end
end
