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

  def create
    collectible = FoundCollectible.new(found_collectible_params)

    if collectible.save
      render json: FoundCollectibleSerializer.new(collectible)
    else
      render json: collectible.errors.full_messages
    end
  end

  def update

  end

  private

  def found_collectible_params
    params.require(:found_collectible).permit(:id, :collectible_type, :collectible_id, :status, :user_id)
  end
end
