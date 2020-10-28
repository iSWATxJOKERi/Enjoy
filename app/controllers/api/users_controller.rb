class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user 
            arr = @user.likes.select("likeable_id").where("kind_of = 'like' AND likeable_type = 'Video'")
            @liked_videos = arr.map{ |ele| ele["likeable_id"] }
            arr2 = @user.likes.select("likeable_id").where("kind_of = 'dislike' AND likeable_type = 'Video'")
            @disliked_videos = arr2.map{ |ele2| ele2["likeable_id"] }

            arr3 = @user.likes.select("likeable_id").where("kind_of = 'like' AND likeable_type = 'Comment'")
            @liked_comments = arr3.map{ |ele| ele["likeable_id"] }
            arr4 = @user.likes.select("likeable_id").where("kind_of = 'dislike' AND likeable_type = 'Comment'")
            @disliked_comments = arr4.map{ |ele2| ele2["likeable_id"] }
            render :show
        else
            render json: { "session" => "No logged in user"}
        end
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