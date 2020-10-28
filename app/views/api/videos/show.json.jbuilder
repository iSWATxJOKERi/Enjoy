json.extract! @video, :id, :title, :description, :uploader, :created_at
json.videoUrl url_for(@video.clip)
json.num_likes @likes
json.num_dislikes @dislikes
json.comments @comments