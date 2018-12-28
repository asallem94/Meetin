json.discussion do
  json.extract! @discussion, :id, :topic, :author_id, :group_id, :comment_count, :created_at
  if @recent_comments
    json.commentIds @recent_comments.ids
  else
    json.commentIds []
  end
end

json.comments do
  if @recent_comments
    @recent_comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :created_at, :comment_count, :commentable_type, :commentable_id
        json.commentIds comment.comments.ids
        json.author_img url_for(comment.author.profile_img)
      end
    end
  end
end
