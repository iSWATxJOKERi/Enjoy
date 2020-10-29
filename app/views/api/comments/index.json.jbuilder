json.array! @comments do |comment|
    json.extract! comment, :id, :body, :commenter, :video_id, :parent_comment_id, :created_at, :updated_at
    json.replies comment.replies.ids
    json.num_likes comment.likes.where("kind_of = 'like'").length
    json.num_dislikes comment.likes.where("kind_of = 'dislike'").length
    if comment.commenter.avatar.attached?
        json.avatarUrl url_for(comment.commenter.avatar)
    else
        json.avatarUrl false
    end
end