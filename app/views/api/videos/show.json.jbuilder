json.extract! @video, :id, :title, :description, :uploader, :created_at
json.videoUrl url_for(@video.clip)
json.num_likes @likes
json.num_dislikes @dislikes
json.comments @comments
if @video.uploader.avatar.attached?
    json.avatarUrl url_for(@video.uploader.avatar)
else
    json.avatarUrl false
end