import React from 'react';
import GetFullDateTime from './shared/get_full_date_time';

class EventTimeLocation extends React.Component{
  constructor(props){
    super(props)
  }


  componentDidMount(){
    //instantite googleapis on SF location
    const mapOptions = {
      center: { lat: this.props.event.lat, lng: this.props.event.lng }, // this is SF
      zoom: 11,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    const newLatLng = new google.maps.LatLng(this.props.event.lat, this.props.event.lng);

    let marker = new google.maps.Marker({
      position: newLatLng,
      title: this.props.event.title,
      map: this.map
    });
  }

  render(){
    return (
      <div id="movable" className="event-time-location-container">
        <div className="location-time-container">
          <div className="location-time-icon">
            <i className="far fa-clock"></i>
          </div>
          <div className="event-location-time-info">
            <h5 className="edit-date-style">{GetFullDateTime(this.props.event.start_date)}</h5>
            <h5 className="edit-date-style">{GetFullDateTime(this.props.event.end_date)}</h5>
          </div>
        </div>
        <div className="location-time-container">
          <div className="location-time-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="event-location-time-info">
            <h5 className="edit-date-style" >{this.props.event.city}</h5>
            <h5 className="edit-date-style" >{this.props.event.address}</h5>
          </div>
        </div>
        <div id="map" ref={map => this.mapNode = map} className="event-map">

        </div>
      </div>
    );
  }

}

export default EventTimeLocation;
