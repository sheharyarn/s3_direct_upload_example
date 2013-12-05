source 'https://rubygems.org'

ruby '2.0.0'
gem 'rails', '4.0.0'

	
group :assets do
	gem 'sass-rails', 	'~> 4.0.0'
	gem 'coffee-rails', '~> 4.0.0'
	gem 'uglifier', 	'>= 1.3.0'
end

group :doc do
  gem 'sdoc', require: false
end

group :development, :test do 
	gem	'sqlite3'
end

group :production do
	gem 'pg'
	gem 'unicorn'
end

gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 1.2'

gem 's3_direct_upload'