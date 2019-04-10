class RemoveUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :url
  end
end
