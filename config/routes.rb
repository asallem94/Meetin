Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :interests, only: [:index]
    resources :groups, only: [:index, :show, :create, :new, :edit, :update] do
      resources :groups_memberships, only: [:create]
    end
    resources :groups_memberships, only: [:destroy]
    resource :session, only: [:create, :destroy]
  end

end
