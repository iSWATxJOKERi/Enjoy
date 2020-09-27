class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        
        if @user.save
            login(@user)
            render json: @user
        else
            render json: { 
                username: @user.errors.full_messages_for(:username),
                password: @user.errors.full_messages_for(:password),
                email: @user.errors.full_messages_for(:email)
            }, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end