class Api::VideosController < ApplicationController
    def index
        @videos = Video.limit(5)
        # @videos = Video.all
        render :index
    end

    # def create
    #     if video_params[:url].nil? || video_params[:title].nil?
    #         render json: ['All fields must be filled out'], status: 422
    #     else
    #         @video = Video.new(video_params)
    #         @video.user_id = current_user.id

    #         if @video.save
    #             render :show
    #         else
    #             render json: @video.errors.full_messages, status: 422
    #         end
    #     end
    # end

    def show
        @video = Video.includes(:user).find_by(id: params[:id])
        if @video
            render :show
        else
            render json: ["Video not found"], status: 404
        end
    end

    def update
    end

    def destroy
    end

    private
    def video_params
        params.require(:video).permit(:title)
        # params.require(:video).permit(:title, :description, :user_id, :url)
    end
end