class UsersController < ApplicationController
  before_action :set_user, only: %i[edit update show destroy]
  def index; end

  def edit; end

  def new; end

  def show; end

  def update; end

  def create; end

  def destroy; end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
