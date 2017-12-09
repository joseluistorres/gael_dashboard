Rails.application.routes.draw do
  match 'test', to: 'welcome#test', via: :get
  root 'welcome#index'
end
