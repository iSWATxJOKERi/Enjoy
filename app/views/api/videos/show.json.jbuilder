json.extract! @video, :id, :title, :description, :uploader, :created_at
json.videoUrl url_for(@video.clip)
