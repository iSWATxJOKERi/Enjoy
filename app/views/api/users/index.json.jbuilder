if @users
    json.array! @users do |user|
        json.extract! user, :id, :username, :email
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
        json.subbers user.subscribers.ids
        json.subbed_to user.subscriptions.ids
    end
else
    json.array! @userSearch do |user|
        json.extract! user, :id, :username, :email
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
        json.subbers user.subscribers.ids
        json.subbed_to user.subscriptions.ids
    end
end