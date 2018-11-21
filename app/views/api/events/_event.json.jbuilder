



  json.set! event.id do
    json.extract! event, :id, :title, :event_img_url, :lat, :lng, :start_date, :end_date, :city, :detail, :private, :attendees_count, :host_id
    
  end
