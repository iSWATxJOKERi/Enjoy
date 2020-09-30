class Like < ApplicationRecord
    validates :kind_of, :liker_id, presence: true
    validates :liker_id, uniqueness: { scope: [:likeable_id, :likeable_type]}

    belongs_to :likeable, :polymorphic => true

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: 'User'
end