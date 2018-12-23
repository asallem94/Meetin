



  json.set! event.id do
    json.extract! event, :id, :title, :lat, :lng, :start_date, :end_date, :city, :detail, :private, :attendees_count, :host_id
    json.imgUrl url_for(event.img)
  end
