class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    super
    sign_in(resource)
  end

  def respond_with(resource, _opts = {})
    render json: { user: resource, token: current_token }
  end

  def respond_to_on_destroy
    head :ok
  end

  private

  def current_token
    request.env['warden-jwt_auth.token']
  end
end
