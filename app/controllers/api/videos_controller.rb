class Api::VideosController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]
    def index
        @videos = Video.all.includes(:uploader).all
        render :index
    end

    def show
        @video = Video.find_by(id: params[:id])
        render :show
    end

    def create
        debugger
        @video = Video.new(video_params)
        @video.uploader = current_user
        @video.uploader_id = current_user.id
        if @video.save
            render json: @video
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def update
        @video = Video.find_by(id: params[:id])
        if @video.update_attributes(video_params)
            render json: @video
        else
            render json: @video.errors.full_messages, status: 422
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