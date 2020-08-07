class BugsController < ApplicationController
  before_action :index, :set_headers

  def index
    bugs = if params[:page]
             Bug.paginate(page: params[:page]).with_attached_image.includes(:location, :time_frames, :found_collectibles, found_months: [:month]).to_a
           else
             Bug.all.with_attached_image.includes(:location, :time_frames, :found_collectibles, found_months: [:month]).to_a
           end

    render json: BugSerializer.new(bugs, include: [:location, :time_frames, :found_collectibles, :found_months]).serialized_json, cache: true
  end


  def set_headers
    response.set_header('Cache-Control', 'max-age=3600')
  end
end
