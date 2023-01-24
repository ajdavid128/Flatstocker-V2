class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.string :image_url
      t.float :current_stock
      t.float :minimum_stock
      t.string :notes
      t.string :category
      t.string :item_url
      t.string :brand
      t.string :color
      t.string :unit_type
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :retailer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
