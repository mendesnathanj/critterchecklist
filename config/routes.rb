Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      devise_for :users,
                path: '',
                path_names: {
                  sign_in: 'login',
                  sign_out: 'logout',
                  registration: 'signup'
                },
                controllers: {
                  sessions: 'sessions',
                  registrations: 'registrations'
                }

      resources :bugs, only: [:index, :show]
      resources :fish, only: [:index]
      resources :sea_creatures, only: [:index]
      resources :fossils, only: [:index]
      resources :found_collectibles, only: [:index]
    end
  end
end
