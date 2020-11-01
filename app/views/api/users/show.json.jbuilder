json.extract! @user, :id, :username, :email
json.liked_videos @liked_videos
json.disliked_videos @disliked_videos
json.liked_comments @liked_comments
json.disliked_comments @disliked_comments
json.liked_comments_video @liked_comments_video
json.disliked_comments_video @disliked_comments_video
json.subbers @subbers
json.subbed_to @subbed_to
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