class Api::CommentsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def index 
        @comments = Comment.all.where("video_id = (?)", params[:video_id])
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: { 
                body: @comment.errors.full_messages_for(:body)
            }, status: 422
        end
    end

    def update
        @comment = Comment.find_by(commenter_id: params[:comment][:commenter_id], video_id: params[:comment][:video_id], id: params[:comment][:id])
        if @comment.update(comment_params)
            render json: @comment
        else
            render json: { 
                body: @comment.errors.full_messages_for(:body)
            }, status: 422
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
        params.require(:comment).permit(:body, :commenter_id, :video_id, :parent_comment_id)
    end
end