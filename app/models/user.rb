class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_attached_file :thumb_nail, default_url: "https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/hero.jpg"
  validates_attachment_content_type :thumb_nail, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  has_many :tracks,
  class_name: :Track,
  primary_key: :id,
  foreign_key: :user_id

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    !user.nil? && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end


  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
