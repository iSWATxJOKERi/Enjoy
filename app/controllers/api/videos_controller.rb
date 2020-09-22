class Api::VideosController < ApplicationController
    def create
        @video = Video.new(video_params)
        if @video.save
            render json: ['Video Uploaded!']
        else
            render json: ['Video could not be uploaded']
        end
    end

    def destroy
        @video = Video.find_by(id: params[:id])
        @video.destroy
    end

    private
    def video_params
        params.require(:video).permit(:title, :description)
    end
end