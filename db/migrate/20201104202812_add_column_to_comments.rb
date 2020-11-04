class AddColumnToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :source, :integer
    add_index :comments, :source
  end
end
