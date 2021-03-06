Rails.application.routes.draw do
  devise_for :users
  root 'application#angular'
  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :games, only:[:create, :update, :index, :show]
      resources :genres, only:[:create, :index, :show]
      resources :developers, only: [:create, :index, :show]
      resources :platforms, only: [:create, :index, :show]
      resources :user_games, only: [:index, :show, :create, :destroy]
      get 'giantbomb/games/search', to: 'giantbomb#games'
      get 'giantbomb/game/search', to: 'giantbomb#game'
      get 'twitch/channels', to: 'twitch#channels'
      get 'twitch/page', to: 'twitch#pagination'
      get 'bing/news', to: 'bing#news'
    end
  end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
