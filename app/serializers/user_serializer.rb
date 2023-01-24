class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :business_name, :password_digest, :unique_retailers

  # has_many :retailers
  has_many :items

  def unique_retailers
    self.object.retailers.uniq
  end

  # def item_count
  #   self.object.items.count
  # end

  # def retailer_count
  #   self.object.retailers.uniq.count
  # end


end
