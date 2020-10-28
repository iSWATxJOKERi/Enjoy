json.extract! @user, :id, :username, :email
json.liked_videos @liked_videos
json.disliked_videos @disliked_videos
json.liked_comments @liked_comments
json.disliked_comments @disliked_comments