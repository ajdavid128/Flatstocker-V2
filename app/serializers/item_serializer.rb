class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :image_url, :current_stock, :minimum_stock, :notes, :category, :item_url, :brand, :color, :unit_type, :updated_at, :updated_date, :retailer_id

  has_one :retailer
  has_one :user

  # CHANGES DATE INTO MORE LEGIBLE FORMAT
  def updated_date
    self.object.updated_at.to_date.to_formatted_s(:long_ordinal)
  end

end
