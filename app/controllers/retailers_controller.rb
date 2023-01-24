class RetailersController < ApplicationController

    wrap_parameters format: []
    skip_before_action :authorized, only: [:create, :index]

    def index
        # "alpha_order" is a Custom Class Method for organizing Retailers in alphabetical order
        retailers = Retailer.alpha_order
        render json: retailers, status: :ok
    end

    def create
        retailer = Retailer.create!(retailer_params)
        render json: retailer, status: :created
    end

    def update
        retailer = Retailer.find(params[:id])
        retailer.update(update_params)
        render json: retailer, status: :accepted
    end

    def destroy
        retailer = Retailer.find(params[:id])
        retailer.destroy
        render json: retailer, status: :ok
        #head :no_content
    end


    private

    def retailer_params
        params.permit(:retailer_name, :website_url, :phone, :email)
    end

    def update_params
        params.permit(:id, :retailer_name, :website_url, :phone, :email)
    end
    
end
