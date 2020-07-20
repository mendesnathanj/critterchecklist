class FoundCollectiblesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: FoundCollectibleSerializer.new(current_user.found_collectibles)
  end
end
