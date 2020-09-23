class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        @like = Like.new(like_params)
        if @like.save
            render json: @like
        else
            render json: @like.errors.full_messages
        end
    end

    def destroy
        @like = Like.find_by(type: params[:like][:type], likeable_id: params[:like][:likeable_id], likeable_type: params[:like][:likeable_type])
        if @like && (@like.liker_id == current_user.id)
            @like.destroy
        else
            render json: ['Not yours!']
        end
    end

    private
    def like_params
        params.require(:like).permit(:type, :likeable_id, :likeable_type, :liker_id)
    end
end