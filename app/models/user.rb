class User < ApplicationRecord
  validates :name, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true

  validates :password, length: {minimum: 6, allow_nil: true}

  before_validation :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(maybe_password)
    BCrypt::Password.new(self.password_digest).is_password?(maybe_password)
  end

  def password=(new_password)
    @password = new_password
    self.password_digest = BCrypt::Password.create(new_password)
  end

  def reset_session_token!
    self.session_token = self.generate_session_token!
    self.save
    self.session_token
  end
  def ensure_session_token
    self.session_token ||= self.generate_session_token!
  end

  # private
  def generate_session_token!
    SecureRandom.urlsafe_base64
  end
end
