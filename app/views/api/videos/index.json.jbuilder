json.array! @videos do |video|
    json.extract! video, :id, :title, :description, :uploader, :created_at
    json.photoUrl url_for(video.thumbnail)
    json.videoUrl url_for(video.clip)
    json.num_likes video.likes.where("kind_of = 'like'").length
    json.num_dislikes video.likes.where("kind_of = 'dislike'").length
    json.comments video.comments.ids
end