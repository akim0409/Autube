class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title,  null: false
      t.string :description
      t.string :url, null: false, unique: true
      t.integer :view_count
      t.integer :user_id, null: false, index: true
      t.timestamps
    end
  end
end
