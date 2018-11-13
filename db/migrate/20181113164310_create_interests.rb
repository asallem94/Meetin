class CreateInterests < ActiveRecord::Migration[5.1]
  def change
    create_table :interests do |t|
      t.string :topic_titles, null: false, unique: true
      t.string :picture_url, null: false
      t.timestamps
    end
  end
end
