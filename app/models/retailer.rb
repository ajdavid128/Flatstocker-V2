class Retailer < ApplicationRecord
    has_many :items
    has_many :users, through: :items

    validates :retailer_name, presence: true
    validates :website_url, presence: true
    

    def self.alpha_order
        self.all.order(:retailer_name)
    end

end
