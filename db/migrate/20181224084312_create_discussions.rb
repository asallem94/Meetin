class CreateDiscussions < ActiveRecord::Migration[5.2]
  def change
    create_table :discussions do |t|
      t.string :topic, null:false
      t.timestamps
    end
    create_table :comments do |t|
      t.string :body, null:false
      t.references :commentable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
