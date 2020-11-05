class Api::CommentsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy, :update]

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

    def show 
        @comment = Comment.find_by(commenter_id: params[:comment][:commenter][:id], video_id: params[:comment][:video_id], id: params[:comment][:id])
        # debugger
        if @comment
            render :show
        end
    end

    def update
        @comment = Comment.find_by(commenter_id: params[:comment][:commenter_id], video_id: params[:comment][:video_id], id: params[:comment][:id])
        # debugger
        if @comment.update(comment_params)
            render :show
        else
            render json: { 
                body: @comment.errors.full_messages_for(:body)
            }, status: 422
        end
    end

    def destroy
        # debugger
        @comment = Comment.find_by(commenter_id: params[:comment][:commenter_id], video_id: params[:comment][:video_id], id: params[:comment][:id])
        # debugger
        if @comment && (@comment.commenter_id == current_user.id)
            @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :commenter_id, :video_id, :parent_comment_id, :source)
    end
end