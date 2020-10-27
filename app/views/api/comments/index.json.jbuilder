json.array! @comments do |comment|
    json.extract! comment, :id, :body, :commenter, :video_id, :parent_comment_id, :created_at, :updated_at
    json.replies comment.replies.ids
end