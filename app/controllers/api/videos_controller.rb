class Api::VideosController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        @video = Video.new(video_params)
        if @video.save
            render json: ['Video Uploaded!']
        else
            render json: @video.errors.full_messages
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
        params.require(:video).permit(:title, :description)
    end
end