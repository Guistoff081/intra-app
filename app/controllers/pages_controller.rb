class PagesController < ApplicationController
  def home
    respond_to do |format|
      format.json { render json: {}, status: :no_content }
      format.html { render :home }
    end
  end
end
