class DocumentsController < ApplicationController
	def index
	end
	
	def new
		@document = Document.create(file_params)
		redirect_to
	end

	def view
		@document = Document.find(params[:id])
	end

	private
		def file_params
			params.require(:document).permit(:file_url)
		end
end
