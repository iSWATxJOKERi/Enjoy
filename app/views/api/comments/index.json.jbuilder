json.array! @comments do |comment|
    json.extract! comment, :id, :body, :commenter, :video_id, :parent_comment_id, :created_at, :updated_at
    json.replies comment.replies.ids
    if comment.parent_comment_id
        json.repliee Comment.where("id = (?)", comment.parent_comment_id)[0].commenter.username
    else
        json.repliee false
    end
    json.lengthofreplies Comment.where("source = (?)", comment.id).length
    json.num_likes comment.likes.where("kind_of = 'like'").length
    json.num_dislikes comment.likes.where("kind_of = 'dislike'").length
    if comment.commenter.avatar.attached?
        json.avatarUrl url_for(comment.commenter.avatar)
    else
        json.avatarUrl false
    end
end