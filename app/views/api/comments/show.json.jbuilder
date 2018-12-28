json.comments do
  json.set! @comment.id do
    json.extract! @comment, :id, :body, :created_at, :comment_count, :commentable_type, :commentable_id
    json.commentIds @comment.comments_sorted.ids
    json.author_img url_for(@comment.author.profile_img)
  end
  @comment.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :created_at, :comment_count, :commentable_type, :commentable_id
      json.commentIds comment.comments_sorted.ids
      json.author_img url_for(comment.author.profile_img)
    end
  end
end
