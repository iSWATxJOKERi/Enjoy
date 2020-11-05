class Api::UsersController < ApplicationController
    before_action :ensure_logged_in, only: [:update]
    def index
        if params[:query]
            @userSearch = User.where("username ILIKE (?) OR email ILIKE (?)", "%#{params[:query]}%", "%#{params[:query]}%").distinct
            render :index
        else
            @users = User.all
            render :index
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        # debugger
        if @user 
            arr = @user.likes.select("likeable_id").where("kind_of = 'like' AND likeable_type = 'Video'")
            @liked_videos = arr.map{ |ele| ele["likeable_id"] }
            arr2 = @user.likes.select("likeable_id").where("kind_of = 'dislike' AND likeable_type = 'Video'")
            @disliked_videos = arr2.map{ |ele2| ele2["likeable_id"] }

            arr3 = @user.likes.select("likeable_id").where("kind_of = 'like' AND likeable_type = 'Comment'")
            @liked_comments = arr3.map{ |ele| ele["likeable_id"] }
            arr4 = @user.likes.select("likeable_id").where("kind_of = 'dislike' AND likeable_type = 'Comment'")
            @disliked_comments = arr4.map{ |ele2| ele2["likeable_id"] }

            @liked_comments_video = @liked_comments.map{ |comment| Like.all.where("likeable_id = (?) AND likeable_type = 'Comment' AND kind_of = 'like'", comment)[0]}
            @disliked_comments_video = @disliked_comments.map{ |comment2| Like.all.where("likeable_id = (?) AND likeable_type = 'Comment' AND kind_of = 'dislike'", comment2)[0]}
            @subbed_to = @user.subscriptions.select("channel_id").map{ |ele| ele["channel_id"] }
            @subbers = @user.subscribers.select("subscriber_id").map{ |ele| ele["subscriber_id"] }
            render :show
        else
            render json: { "session" => "No logged in user"}
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        # debugger
        if @user.update_attributes(user_params)
            render :show
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