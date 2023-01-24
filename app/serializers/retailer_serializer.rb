class RetailerSerializer < ActiveModel::Serializer
  attributes :id, :retailer_name, :website_url, :phone, :email

  has_many :items
end
