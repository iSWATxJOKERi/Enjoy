class Video < ApplicationRecord
    validates :title, :description, :uploader_id, presence: true
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

end