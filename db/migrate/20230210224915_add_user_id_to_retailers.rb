class AddUserIdToRetailers < ActiveRecord::Migration[6.1]
  def change
    add_column :retailers, :user_id, :bigint
  end
end
