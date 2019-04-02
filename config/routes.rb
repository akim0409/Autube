Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users do
    end
    # resources :videos, only: [:new, :edit]
    # resources :comments, only: 

    resource :session, only: [:show, :create, :destroy]
    resources :videos, except: [:new, :edit]
  end
end
