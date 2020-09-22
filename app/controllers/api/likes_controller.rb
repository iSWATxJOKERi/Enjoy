class Api::LikesController < ApplicationController
    def create
        @like = Like.new(like_params)
        @like.likeable_id = current_user.id
        @like.likeable_type = current_user.class.name
        @like.liker_id = current_user.id
        if @like.save
            render json: @like
        end
    end

    def destroy
        @like = Like.find_all_by_type(params[:like][:type])
    end

    private
    def like_params
        params.require(:like).permit(:type)
    end
end