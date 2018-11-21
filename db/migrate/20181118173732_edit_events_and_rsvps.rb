class EditEventsAndRsvps < ActiveRecord::Migration[5.1]
  def change
    change_column :event_rsvps, :rsvp, :boolean, default: false
    remove_column :events, :private, :float
    add_column :events, :private, :boolean,  :default => false
    add_column :events, :price, :float, :default => 0.0
  end
end
