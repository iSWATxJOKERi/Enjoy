json.extract! user, :id, :username
if user.avatar.attached?
    json.avatar url_for(user.avatar)
else
    json.avatar false
end
if user.banner.attached?
    json.banner url_for(user.banner)
else
    json.banner false
end
json.subbers user.subscribers.select("subscriber_id").map{ |ele| ele["subscriber_id"] }
json.subbed_to user.subscriptions.select("channel_id").map{ |ele| ele["channel_id"] }
json.subscriptions user.subscriptions.select("channel_id").map{ |ele| ele["channel_id"] }.map{ |s| User.find_by("id = (?)", s) }