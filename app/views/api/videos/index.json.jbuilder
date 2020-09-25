json.array! @videos do |video|
    json.extract! video, :id, :title, :description
    json.videoUrl url_for(video.thumbnail)
end