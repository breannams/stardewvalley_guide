Rails.application.routes.draw do
  resources :quests
  resources :minerals
  resources :shops
  resources :crops
  resources :animals
  resources :fish
  resources :trees
  resources :recipes
  resources :bundles
  resources :heartevents
  resources :villagers
  resources :stardewvalleys
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
