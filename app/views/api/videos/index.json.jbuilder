json.array! @videos do |video|
    json.extract! video, :id, :title, :description
    json.photoUrl url_for(video.thumbnail)
end