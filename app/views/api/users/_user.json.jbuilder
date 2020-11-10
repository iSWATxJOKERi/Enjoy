arr = user.likes.select("likeable_id").where("kind_of = 'like' AND likeable_type = 'Video'")
liked_videos = arr.map{ |ele| ele["likeable_id"] }
arr2 = user.likes.select("likeable_id").where("kind_of = 'dislike' AND likeable_type = 'Video'")
disliked_videos = arr2.map{ |ele2| ele2["likeable_id"] }

arr3 = user.likes.select("likeable_id").where("kind_of = 'like' AND likeable_type = 'Comment'")
liked_comments = arr3.map{ |ele| ele["likeable_id"] }
arr4 = user.likes.select("likeable_id").where("kind_of = 'dislike' AND likeable_type = 'Comment'")
disliked_comments = arr4.map{ |ele2| ele2["likeable_id"] }

liked_comments_video = liked_comments.map{ |comment| Like.all.where("likeable_id = (?) AND likeable_type = 'Comment' AND kind_of = 'like'", comment)[0]}
disliked_comments_video = disliked_comments.map{ |comment2| Like.all.where("likeable_id = (?) AND likeable_type = 'Comment' AND kind_of = 'dislike'", comment2)[0]}
subbed_to = user.subscriptions.select("channel_id").map{ |ele| ele["channel_id"] }
subbers = user.subscribers.select("subscriber_id").map{ |ele| ele["subscriber_id"] }
subscriptions = subbed_to.map{ |s| User.find_by("id = (?)", s) }

json.extract! user, :id, :username, :email, :created_at
json.liked_videos liked_videos
json.disliked_videos disliked_videos
json.liked_comments liked_comments
json.disliked_comments disliked_comments
json.liked_comments_video liked_comments_video
json.disliked_comments_video disliked_comments_video
json.subbers subbers
json.subbed_to subbed_to
json.subscriptions subscriptions do |sub|
    json.extract! sub, :id, :username, :email, :created_at
    json.liked_videos liked_videos
    json.disliked_videos disliked_videos
    json.liked_comments liked_comments
    json.disliked_comments disliked_comments
    json.liked_comments_video liked_comments_video
    json.disliked_comments_video disliked_comments_video
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