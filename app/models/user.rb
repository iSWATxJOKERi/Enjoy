class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 8, allow_nil: true} 
    after_initialize :ensure_session_token
    attr_reader :password

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: 'Like'

    has_many :liked_videos,
        through: :likes,
        source: :likeable, source_type: 'Video'
    
    has_one_attached :avatar
    has_one_attached :banner

    has_many :videos,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: 'Video'
        
    has_many :comments,
        primary_key: :id,
        foreign_key: :commenter_id,
        class_name: 'Comment'

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        ap = BCrypt::Password.new(self.password_digest)
        ap.is_password?(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token 
    end
end