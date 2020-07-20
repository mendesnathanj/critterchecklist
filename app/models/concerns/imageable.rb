# SHOW

module Imageable
  include ActiveSupport::Concern
  include Rails.application.routes.url_helpers

  def default_url_options
    {}
  end

  def image_url
    rails_blob_url(image, only_path: true)
  end
end
