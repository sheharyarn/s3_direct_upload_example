S3DirectUploadExample::Application.routes.draw do
  root :to           => 'documents#index'  
  match '/new/'      => 'documents#new',   :via => :POST, :as => :new
  match '/view/'	 => 'documents#view',  :via => :GET,  :as => :view
end
