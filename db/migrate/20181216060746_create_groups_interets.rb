class CreateGroupsInterets < ActiveRecord::Migration[5.2]
  def change
    create_table :group_interest_relationships do |t|
      t.integer :interest_id, null: false
      t.integer :group_id, null: false
      t.timestamp
    end
    add_index :group_interest_relationships, [:interest_id, :group_id], unique: true

    create_table :event_interest_relationships do |t|
      t.integer :interest_id, null: false
      t.integer :event_id, null: false
      t.timestamp
    end
    add_index :event_interest_relationships, [:interest_id, :event_id], unique: true
    add_index :chat_user_relationships, [:user_id, :chat_id], unique: true

    add_index :messages, :chat_id
    add_index :messages, :author_id
  end
end
