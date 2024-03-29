Rails.application.routes.draw do
  
  resources :items, only: [:index, :create, :update, :destroy]
  resources :retailers, only: [:index, :create, :update, :destroy]
  resources :users

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # keeps user logged in
  get '/me', to: 'users#show'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
