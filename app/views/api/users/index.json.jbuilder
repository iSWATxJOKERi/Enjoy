json.array! @users do |user|
    json.extract! user, :id, :username, :email
    json.photoUrl url_for(user.avatar)
    json.headerUrl url_for(user.banner)
    json.subbers user.subscribers.ids
    json.subbed_to user.subscriptions.ids
end