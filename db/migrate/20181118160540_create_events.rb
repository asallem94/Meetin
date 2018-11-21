class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :host_id, null: false
      t.integer :group_id, null: false
      t.string :title, null: false
      t.string :event_img_url
      t.string :address, null: false
      t.string :city, null: false
      t.string :detail, null: false
      t.float :lng, null: false
      t.float :lat, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.boolean :private, :default => false
      t.float :private, :default => 0.0
      t.timestamps
    end
    add_index :events, :host_id
    add_index :events, :group_id

    create_table :event_rsvps do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
      t.boolean :rsvp
      t.timestamp
    end
    add_index :event_rsvps, [:user_id, :event_id], unique: true
  end
end
