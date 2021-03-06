import React from 'react';
import { connect } from 'react-redux';
import { fetchFindableGroups } from '../../actions/meetin_actions';
import { fetchFindableEvents } from '../../actions/event_actions';
import { updateFilters } from '../../actions/filter_actions';
import GroupsIndex from './groups_components/group_index/groups_index';
import EventSearchContainer from './calendar_components/event_search_container';
import { merge } from 'lodash';


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state =  this.props.filters;
    this.updatefilters = this.updatefilters.bind(this);
    this.invokeQuery = this.invokeQuery.bind(this);
    this.updateQueryType = this.updateQueryType.bind(this);
    this.displayContent = this.displayContent.bind(this);
    this.updateReferenceLocation = this.updateReferenceLocation.bind(this);
  }

  componentDidMount(){
    const filters = this.state;

    this.props.fetchFindableGroups(filters);
  }

  invokeQuery(e){
    e.preventDefault();
    if (this.state.queryType === "groups") {
      this.props.fetchFindableGroups(this.state);
    } else {
      // this.props.updateFilters(merge({}, this.props.filters, this.state));
      this.props.fetchFindableEvents(this.state);
    }
  }

  updatefilters(filter){
    return (e) => {

      if (filter === 'radi'){
        // if the filter is radi this is what you wanna do .
        this.setState({[filter]: e.target.value}, () => {
          // on success (in this call back), invoke the fetcher
          this.props.updateFilters(this.state);
          if (this.state.queryType === "groups") {
            this.props.fetchFindableGroups(this.state);
          } else {
            this.props.fetchFindableEvents(this.state);
          }
        });
      } else {
        // if the filter is NOT radi, then you only want to update the state part.
        // without the success callback
        this.setState({[filter]: e.target.value});
        this.props.updateFilters(this.state);
      }

    };
  }

  updateReferenceLocation(){
    navigator.geolocation.getCurrentPosition((location) =>{
      this.setState({coord: {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }});
      this.props.updateFilters(this.state);
    });
  }

  updateQueryType(queryType){
    return (e) => {
      this.setState({queryType: queryType});
      this.props.updateFilters(this.state);
    };
  }
  tabClass(queryType){
    if (this.state.queryType === "groups"){
      return (queryType === "groups") ? "calendar-groups-tab-item left-tab-item calendar-groups-tab-selected" : "calendar-groups-tab-item right-tab-item";
    } else {
      return (queryType === "calendar") ? "calendar-groups-tab-item right-tab-item calendar-groups-tab-selected" : "calendar-groups-tab-item left-tab-item";
    }
  }
  displayRadi(n){
    if (n > 100) {
      return "any distance";
    }else{
      return `${n} miles`;
    }
  }
  displayContent(){
    if (this.state.queryType === "groups") {
      return (<GroupsIndex className="groupsIndex" groups={this.props.groups} filters={this.props.filters}/>);
    } else {
      return (<EventSearchContainer/>);
    }
  }
  render(){
    return (
      <div className="find-page-container">
        <div className="find-page-container-content">
          <form className="search-component" onSubmit={this.invokeQuery}>
            <div className="filters-container">
              <div className="searchbar-container">
                <input
                  className="search-input"
                  type="text"
                  placeholder="All Meet-ins"
                  value={this.state.query}
                  onChange={this.updatefilters('query')}
                />
                <i className="fas fa-search"></i>
              </div>

              <div className="location-filter-section">
                within
                <ul className="radi-dropdown" tabIndex="123">
                <span className="search-radius location-inputs clickable" >
                  {this.displayRadi(this.state.radi)}
                </span>
                  <ul className="radi-dropdown-container">
                    <li onClick={this.updatefilters('radi')} className="radi-option clickable" value="2">2 miles</li>
                    <li onClick={this.updatefilters('radi')} className="radi-option clickable" value="5">5 miles</li>
                    <li onClick={this.updatefilters('radi')} className="radi-option clickable" value="10">10 miles</li>
                    <li onClick={this.updatefilters('radi')} className="radi-option clickable" value="20">20 miles</li>
                    <li onClick={this.updatefilters('radi')} className="radi-option clickable" value="50">50 miles</li>
                    <li onClick={this.updatefilters('radi')} className="radi-option clickable" value="100">100 miles</li>
                    <li onClick={this.updatefilters('radi')} className="radi-option clickable" value="12455">any distance</li>
                  </ul>
                </ul>
                  of
                <span onClick={this.updateReferenceLocation} className="search-city location-inputs clickable">New York, Bronx
                </span>
              </div>
            </div>
            <ul className="calendar-groups-tabs">
              <li className={this.tabClass("groups")} onClick={this.updateQueryType("groups")} >Groups</li>
              <li className={this.tabClass("calendar")} onClick={this.updateQueryType("calendar")}>Calendar</li>
            </ul>
          </form>
          {this.displayContent()}
        </div>
      </div>
    );
  }
}

const msp = (state) => {
  const currUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currUserId];

  const filters = merge({}, state.ui.filters, {coord: {lng: currentUser.lng, lat: currentUser.lat}});
  return {
    currentUser: currentUser,
    groups: Object.values(state.entities.groups),
    filters: filters,
  };
};


const mdp = (dispatch) => {
  return {

    fetchFindableEvents: (filters) => dispatch(fetchFindableEvents(filters)),
    fetchFindableGroups: (filters) => dispatch(fetchFindableGroups(filters)),
    updateFilters: (filters) => dispatch(updateFilters(filters)),
  };
};

const SearchContainer = connect(msp, mdp)(SearchBar);

export default SearchContainer;
