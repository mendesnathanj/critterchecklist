class BugsController < ApplicationController
  def index
    bugs = if params[:page]
             Bug.paginate(page: params[:page]).with_attached_image.includes(:location, :time_frames, :found_collectibles, found_months: [:month]).to_a
           else
             Bug.all.with_attached_image.includes(:location, :time_frames, :found_collectibles, found_months: [:month]).to_a
           end

    render json: BugSerializer.new(bugs, include: [:location, :time_frames, :found_collectibles, :found_months]).serialized_json, cache: true
  end

  def show
    bug = Bug.find(params[:id]).includes(:location, :time_frames, found_months: [:month])

    render json: BugSerializer.new(bug, include: [:location, :time_frames, :found_months]).serialized_json
  end
end
