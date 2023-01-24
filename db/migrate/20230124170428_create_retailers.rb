class CreateRetailers < ActiveRecord::Migration[6.1]
  def change
    create_table :retailers do |t|
      t.string :retailer_name
      t.string :website_url
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end
