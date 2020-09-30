class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def index
        # debugger
        @likes = Like.all.where("likeable_id = (?)", params[:video_id])
        render :index
    end

    def create
        @like = Like.new(like_params)
        # debugger
        if @like.save
            # debugger
            render json: { success: "You did it" }
        else
            render json: @like.errors.full_messages
        end
    end

    def destroy
        # debugger
        @like = Like.find_by(kind_of: params[:like][:kind_of], likeable_id: params[:like][:likeable_id], likeable_type: params[:like][:likeable_type])
        if @like && (@like.liker_id == current_user.id)
            @like.destroy
        else
            render json: ['Not yours!']
        end
    end

    private
    def like_params
        params.require(:like).permit(:kind_of, :likeable_id, :likeable_type, :liker_id)
    end
end