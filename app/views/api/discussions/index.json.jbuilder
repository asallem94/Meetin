json.discussions do
  @discussions.each do |discussion|
    json.set! discussion.id do
      json.extract! discussion, :id, :topic, :author_id, :group_id, :created_at
    end
  end
end
