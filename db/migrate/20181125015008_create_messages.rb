class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false
      t.integer :chat_id, null: false
      t.text :body, null: false
      t.timestamps
    end

    create_table :chat_user_relationships do |t|
      t.integer :user_id, null: false
      t.integer :chat_id, null: false
      t.timestamps
    end

    create_table :chats do |t|
      t.string :title, null: false
      t.timestamps
    end
  end
end
