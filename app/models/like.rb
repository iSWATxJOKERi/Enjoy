class Like < ApplicationRecord
    validates :type, :liker_id, presence: true
    validates :liker_id, uniqueness: { scope: [:likeable_id, :likeable_type]}

    belongs_to :likeable, :polymorphic => true
end