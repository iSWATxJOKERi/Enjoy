class Api::VideosController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy, :update]
    def index
        if params[:query]
            @videoSearch = Video.where("title ILIKE (?) OR description ILIKE (?)","%#{params[:query]}%", "%#{params[:query]}%").distinct
            render :index
        else
            @videos = Video.all.includes(:uploader).all
            render :index
        end
    end

    def show
        @video = Video.find_by(id: params[:id])
        # debugger
        @upnext = Video.all.includes(:uploader).all 
        @likes = @video.likes.where("kind_of = 'like'").length
        @dislikes = @video.likes.where("kind_of = 'dislike'").length
        @comments = Comment.all.where("video_id = (?)", params[:id]).ids
        # debugger
        render :show
    end

    def create
        # debugger
        @video = Video.new(video_params)
        @video.uploader = current_user
        @video.uploader_id = current_user.id
        # debugger
        if @video.save
            render :show
        else
            render json: { 
                title: @video.errors.full_messages_for(:title),
                description: @video.errors.full_messages_for(:description),
                clip: @video.errors.full_messages_for(:clip),
                thumbnail: @video.errors.full_messages_for(:thumbnail)
            }, status: 422
        end
    end

    def update
        @video = Video.find_by(id: params[:id])
        # debugger
        if @video.update(video_params)
            render :show
        else
            render json: { 
                title: @video.errors.full_messages_for(:title),
                description: @video.errors.full_messages_for(:description),
                thumbnail: @video.errors.full_messages_for(:thumbnail)
            }, status: 422
        end
    end

    def destroy
        @video = Video.find_by(id: params[:id])
        if @video && (@video.uploader_id == current_user.id)
            @video.destroy
        else
            render json: ['Not yours!']
        end
    end

    private
    def video_params
        params.require(:video).permit(:title, :description, :clip, :thumbnail)
    end
end