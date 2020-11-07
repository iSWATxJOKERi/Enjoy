json.extract! @user, :id, :username, :email
json.liked_videos @liked_videos
json.disliked_videos @disliked_videos
json.liked_comments @liked_comments
json.disliked_comments @disliked_comments
json.liked_comments_video @liked_comments_video
json.disliked_comments_video @disliked_comments_video
json.subbers @subbers
json.subbed_to @subbed_to
json.subscriptions @subscriptions do |sub|
    json.extract! sub, :id, :username, :email
    json.liked_videos @liked_videos
    json.disliked_videos @disliked_videos
    json.liked_comments @liked_comments
    json.disliked_comments @disliked_comments
    json.liked_comments_video @liked_comments_video
    json.disliked_comments_video @disliked_comments_video
    if sub.avatar.attached?
        json.avatar url_for(sub.avatar)
    else
        json.avatar false
    end

    if sub.banner.attached?
        json.banner url_for(sub.banner)
    else
        json.banner false
    end
end
if @user.avatar.attached?
    json.avatar url_for(@user.avatar)
else
    json.avatar false
end

if @user.banner.attached?
    json.banner url_for(@user.banner)
else
    json.banner false
end