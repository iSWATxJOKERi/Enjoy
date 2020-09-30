class UpdateLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :type
    add_column :likes, :kind_of, :string
    add_index :likes, :kind_of
  end
end
