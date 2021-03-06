class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    if current_user
      current_user.reset_session_token!
      session[:session_token] = nil
      render json: {}
    else
      render json: ["Not logged in."], status: 404
    end
  end
end
