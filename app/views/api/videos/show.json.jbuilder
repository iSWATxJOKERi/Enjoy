json.extract! @video, :id, :title, :description, :uploader, :created_at
json.videoUrl url_for(@video.clip)
json.num_likes @likes.length
json.num_dislikes @dislikes.length