json.extract! @video, :id, :title, :description
json.videoUrl url_for(@video.clip)