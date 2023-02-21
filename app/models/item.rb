class Item < ApplicationRecord
  belongs_to :user
  belongs_to :retailer

  validates :item_name, presence: true
  validates :category, presence: true
  validates :color, presence: true
end
