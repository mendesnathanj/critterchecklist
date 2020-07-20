class SeaCreaturesController < ApplicationController
  def index
    sea_creatures = if params[:page]
                      SeaCreature.paginate(page: params[:page])
                        .with_attached_image
                        .includes(:shadow, :swimming_pattern, :time_frames, found_months: [:month]).to_a
                    else
                      SeaCreature.all
                        .with_attached_image
                        .includes(:shadow, :swimming_pattern, :time_frames, found_months: [:month]).to_a
                    end

    render json: SeaCreatureSerializer.new(sea_creatures, include: [:shadow, :swimming_pattern, :time_frames, :found_months]).serialized_json
  end
end
