class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def index
        # debugger
        if params[:video_id] && params[:comment_id]
            @commentlikes = Like.all.where("likeable_id = (?) AND likeable_type = 'Comment'", params[:comment_id])
            render :index
        elsif params[:video_id]
            @videolike = Like.all.where("likeable_id = (?) AND likeable_type = 'Video'", params[:video_id])
            render :index
        end
    end

    def create
        @like = Like.new(like_params)
        # debugger
        if @like.save
            # debugger
            render json: @like.to_json
        else
            # debugger
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        # debugger
        @like = Like.find_by(kind_of: params[:like][:kind_of], likeable_id: params[:like][:likeable_id], likeable_type: params[:like][:likeable_type])
        if @like && (@like.liker_id == current_user.id)
            # debugger
            @like.destroy
            render json: @like.to_json
        else
            # debugger
            render json: ['Not yours!']
        end
    end

    private
    def like_params
        params.require(:like).permit(:kind_of, :likeable_id, :likeable_type, :liker_id)
    end
end