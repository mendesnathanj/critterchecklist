class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  has_many :found_collectibles

  def jwt_payload
    { id: id, email: email, hemisphere: hemisphere }
  end
end

