json.array! @videos do |video|
    json.extract! video, :id, :title, :description, :uploader, :created_at
    json.photoUrl url_for(video.thumbnail)
end