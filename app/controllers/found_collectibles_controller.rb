class FoundCollectiblesController < ApplicationController
  before_action :authenticate_user!

  def index
    collectibles = if params[:collectible_type]
                     current_user.found_collectibles.where(collectible_type: params[:collectible_type].capitalize)
                   else
                     current_user.found_collectibles
                   end

    render json: FoundCollectibleSerializer.new(collectibles).serialized_json
  end

  def create
    collectible = FoundCollectible.new(found_collectible_params.merge(user_id: current_user.id))

    if collectible.save
      render json: collectible
    else
      render json: collectible.errors.full_messages
    end
  end

  def update
    collectible = current_user.found_collectibles.find(params[:id])

    if collectible.update(found_collectible_params)
      render json: collectible
    else
      render json: collectible.errors.full_messages
    end
  end

  def destroy
    collectible = current_user.found_collectibles.find(params[:id])

    if collectible.destroy
      render json: {}
    else
      render json: collectible.errors.full_messages
    end
  end

  private

  def found_collectible_params
    params.require(:found_collectible).permit(:id, :collectible_type, :collectible_id, :status)
  end
end
