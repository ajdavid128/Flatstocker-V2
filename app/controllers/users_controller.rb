class UsersController < ApplicationController

    wrap_parameters format: []
    # ^information: https://api.rubyonrails.org/v6.0.2.2/classes/ActionController/ParamsWrapper.html

    skip_before_action :authorized, only: [:create, :index]

    #GET /users
    def index
        render json: User.all, status: :ok
    end

    #SHOW /me 
    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    #PATCH /users/:id
    def update
        # byebug
        user = User.find(params[:id])
        user.update!(update_user_info)
        render json: user, status: :accepted
    end

    #CREATE /signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    #DELETE /users/:id
    def destroy
        User.find(params[:id]).destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :email, :username, :business_name, :password, :password_confirmation)
    end

    def update_user_info
        params.permit(:id, :name, :username, :business_name, :email, :password, :password_confirmation)
    end

end
