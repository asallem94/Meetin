class CreateGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.integer :organizer_id, null: false
      t.string :title, null: false
      t.string :img_url
      t.string :city, null: false
      t.string :description, null: false
      t.float :lng, null: false
      t.float :lat, null: false
      t.boolean :private, :default => false
    end
    add_index :groups, :organizer_id
  end
end
