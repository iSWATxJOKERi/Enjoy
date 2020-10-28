Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, default: { format: :json } do 
    resources :users, only: [:create, :index, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :create, :destroy, :update]
    resources :videos, only: [:show] do 
      resources :comments, only: [:create, :index, :update, :destroy] do 
        resources :likes, only: [:index, :create, :destroy]
      end
      resources :likes, only: [:index, :create, :destroy]
    end
  end
end
