class AddIndexToSubscriptions < ActiveRecord::Migration[5.2]
  def change
    add_index :subscriptions, [:subscriber_id, :channel_id], unique: true
  end
end
