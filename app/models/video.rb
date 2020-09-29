class Video < ApplicationRecord
    validates :title, :description, :uploader_id, presence: true
    validate :ensure_thumbnail
    validate :ensure_clip
    has_many :likes, :as => :likeable

    has_one_attached :clip
    has_one_attached :thumbnail

    belongs_to :uploader,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: 'User'

    has_many :comments,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: 'Comment'

    def ensure_thumbnail
        unless self.thumbnail.attached?
            errors[:thumbnail] << "must be attached"
        end
    end

    def ensure_clip
        unless self.clip.attached?
            errors[:clip] << "must be attached"
        end
    end
end