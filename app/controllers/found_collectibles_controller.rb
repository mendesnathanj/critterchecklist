class FoundCollectiblesController < ApplicationController
  before_action :authenticate_user!

  def index
    collectibles = if params[:collectible_type]
                     current_user.found_collectibles.where(collectible_type: params[:collectible_type].capitalize)
                   else
                     current_user.found_collectibles
                   end

    render json: FoundCollectibleSerializer.new(collectibles)
  end
end
