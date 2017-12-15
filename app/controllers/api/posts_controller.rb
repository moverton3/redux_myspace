class Api::PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.posts
  end

  def create
  end

  def update
  end

  def destroy
  end
end
