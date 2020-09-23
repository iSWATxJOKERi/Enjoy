class Api::CommentsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render json: @comment
        else
            render json: @comment.errors.full_messages
        end
    end

    def destroy
        @comment = Comment.find_by(commenter_id: params[:comment][:commenter_id], video_id: params[:comment][:video_id], id: params[:comment][:id])
        if @comment && (@comment.commenter_id == current_user.id)
            @comment.destroy
        else
            render json: ['Not yours!']
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :commenter_id, :video_id)
    end
end