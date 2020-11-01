class Subscription < ApplicationRecord
    validates :subscriber_id, :channel_id, presence: true
    validates :subscriber_id, uniqueness: { scope: [:channel_id] }

    belongs_to :subscriber,
        primary_key: :id,
        foreign_key: :subscriber_id,
        class_name: 'User'

    belongs_to :channel,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: 'User'
end