class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :business_name, :password_digest, :unique_retailers, :all_item_categories

  # has_many :retailers
  has_many :items

  def unique_retailers
    self.object.retailers.uniq
  end

  # This method will provide all the categories from a specific user's items table and give the count of each one in an object
  def all_item_categories
    self.object.items.pluck(:category).tally
  end

  # def item_count
  #   self.object.items.count
  # end

  # def retailer_count
  #   self.object.retailers.uniq.count
  # end


end
