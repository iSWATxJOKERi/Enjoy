class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        # debugger
        if @user 
            login(@user)
            render json: @user
        else
            render json: ['Invalid Email and/or Password'], status: 404
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