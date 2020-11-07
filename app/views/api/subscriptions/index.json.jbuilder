if @subscriptions
    json.array! @subscriptions do |sub|
        json.extract! sub, :id, :subscriber_id, :channel_id
    end
else
    json.array! @subs do |sub|
        json.extract! sub, :id, :subscriber_id, :channel_id
    end
end