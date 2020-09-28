class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user.update_attributes(user_params)
            render json: @user
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

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
        params.require(:user).permit(:username, :password, :email, :avatar, :banner)
    end
end