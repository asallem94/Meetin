import React from 'react';
import { connect } from 'react-redux';
import { fetchFindableGroups } from '../../actions/meetin_actions'
import GroupsIndex from './groups_components/groups_index'

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      queryType:"Groups",
      filters:{
        query: "",
        radi: 5,
        coord:{
          lng: this.props.currentUser.lng,
          lat: this.props.currentUser.lat
        }
      }
    };
    this.updatefilters = this.updatefilters.bind(this);
    this.invokeQuery = this.invokeQuery.bind(this);
  }

  componentDidMount(){
    this.props.fetchFindableGroups(this.state.filters);
  }

  invokeQuery(e){
    // e.preventDefault;
    this.props.fetchFindableGroups(this.state.filters);
  }

  updatefilters(filter){
    return (e) => {
      this.setState({[filter]: e.target.value});
    };
  }

  updateQueryType(queryType){
    return (e) => {
      this.setState({queryType: e.target.value});
    };
  }


  render(){
    return (
      <div className="find-page-container-content">
        <form className="search-component" onSubmit={this.invokeQuery}>
          <div className="filters-container">
            <div className="searchbar-container">
              <input
                className="search-input"
                type="text"
                placeholder="All Meet-ins"
                value={this.state.query}
                unchange={this.updateQuery}
              />
              <i className="fas fa-search"></i>
            </div>

            <div className="location-filter-section">
              within
              <span className="search-radius location-inputs" >5 miles
              </span>
                of
              <span className="search-city location-inputs">New York, Bronx
              </span>
            </div>
          </div>
          <ul className="calendar-groups-tabs">
            <li className="calendar-groups-tab-item left-tab-item" onClick={this.updateQueryType("Groups")}>Groups</li>
            <li className="calendar-groups-tab-item right-tab-item" >Calendar</li>
          </ul>
        </form>
        <GroupsIndex groups={this.props.groups}/>
      </div>
    );
  }
}

const msp = (state) => {
  const currUserId = state.session.currentUserId;
  return {
    currentUser: state.entities.users[currUserId],
    groups: Object.values(state.entities.groups),
    filters: state.ui.filters
  };
};


const mdp = (dispatch) => {
  return {
    fetchFindableGroups: (filters) => dispatch(fetchFindableGroups(filters)),
    updateRadi: (radius) => dispatch(updateRadi)
  };
};

const SearchContainer = connect(msp, mdp)(SearchBar);

export default SearchContainer;
