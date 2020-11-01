json.array! @subscriptions do |sub|
    json.extract! sub, :id, :subscriber_id, :channel_id
end