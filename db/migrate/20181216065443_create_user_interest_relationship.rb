class CreateUserInterestRelationship < ActiveRecord::Migration[5.2]
  def change
    create_table :user_interest_relationships do |t|
      t.integer :interest_id, null: false
      t.integer :user_id, null: false
      t.timestamp
    end
    add_index :user_interest_relationships, [:interest_id, :user_id], unique: true
  end
end
