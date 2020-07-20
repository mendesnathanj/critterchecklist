class FishController < ApplicationController
  def index
    fish = if params[:page]
             Fish.paginate(page: params[:page]).with_attached_image.includes(:shadow, :location, :time_frames, found_months: [:month]).to_a
           else
             Bug.all.with_attached_image.includes(:shadow, :location, :time_frames, found_months: [:month]).to_a
           end

    render json: FishSerializer.new(fish, include: [:shadow, :location, :time_frames, :found_months]).serialized_json
  end
end
