class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user 
            login(@user)
        else
            render json: ['Invalid Username and/or Password'], status: 422
        end
    end

    def destroy
        if !current_user
            render json: { status: 404 }
        else
            logout
            render json: {}
        end
    end
end