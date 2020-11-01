class Api::SubscriptionsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def index
        # debugger
        @subscriptions = Subscription.all.where("channel_id = (?) AND subscriber_id = (?)", params[:channel_id], params[:user_id])
        render :index
    end

    def create
        @subscription = Subscription.new(subs_params)
        # debugger
        if @subscription.save
            render json: @subscription
        else
            render json: @subscription.errors.full_messages, status: 422
        end
    end

    def destroy
        @subscription = Subscription.find_by(id: params[:subscription][:id], subscriber_id: params[:subscription][:subscriber_id], channel_id: params[:subscription][:channel_id])
        if @subscription && (@subscription.subscriber_id == current_user.id)
            @subscription.destroy
            render json: @subscription
        else
            render json: @subscription.errors.full_messages, status: 422
        end
    end

    private
    def subs_params
        params.require(:subscription).permit(:subscriber_id, :channel_id)
    end
end