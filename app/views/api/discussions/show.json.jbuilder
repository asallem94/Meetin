json.discussion do
  json.set! @discussion.id do
    json.extract! @discussion, :id, :topic, :author_id, :group_id
    if @recent_comments
      json.commentIds @recent_comments.ids
    else
      json.commentIds []
    end
  end
end

json.comment do
  @recent_comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :created_at
    end
  end
end
