Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :index, :show] do
      resources :tracks, only: [:index]
    end
    
    resource :session, only: [:create, :destroy]

    resources :tracks do
      resources :comments, only: [:index, :create]
    end

    resources :comments, only: [:destroy]
  end

  root "static_pages#root"
end
