class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :likeable, polymorphic: true
      t.string :type, null: false
      t.integer :liker_id, null: false
      t.timestamps
    end
    add_index :likes, :type
    add_index :likes, :liker_id
    add_index :likes, [:liker_id, :likeable_id, :likeable_type], unique: true
  end
end
