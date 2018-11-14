

@interests.each do |interest|
  json.set! interest.id do
    json.extract! interest, :id, :topic_titles, :picture_url
  end
end
