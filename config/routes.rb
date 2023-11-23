Rails.application.routes.draw do
  # rotas da landing page
  devise_for :users
  root to: 'pages#home', export: true
  get 'pages/home'

  # link das rotas com o router do vue
  resources :users, export: true

  # restful Api para uso externo
  namespace :api, defaults: { format: :json }, export: true do
    devise_for :users
    resources :users do
      collection do
        get :current
      end
    end
  end

  # extras
  get "up" => "rails/health#show", as: :rails_health_check
end
