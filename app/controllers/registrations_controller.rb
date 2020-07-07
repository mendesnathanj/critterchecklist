class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    super
    sign_in(resource)
  end

  def respond_with(resource, _opts = {})
    render json: resource
  end

  def respond_to_on_destroy
    head :ok
  end
end
