Rails.application.routes.draw do
  resources :ticks
  resources :locations
  resources :climbs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
