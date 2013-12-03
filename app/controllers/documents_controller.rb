class DocumentsController < ApplicationController
	def index
	end
	
	def new
		@document = Document.create(file_params)
		render js: "window.location = '#{view_url}'"
	end

	def view
		# @document = Document.find(params[:id])
		@document = Document.last
	end

	private
		def file_params
			params.require(:document).permit(:file_url)
		end
end
