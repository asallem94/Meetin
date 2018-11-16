import React from 'react';
import { connect } from 'react-redux';
import { fetchFindableGroups } from '../../actions/meetin_actions';
import { updateRadi } from '../../actions/filter_actions';
import GroupsIndex from './groups_components/groups_index';
import { merge } from 'lodash';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state =  this.props.filters;
    this.updatefilters = this.updatefilters.bind(this);
    this.invokeQuery = this.invokeQuery.bind(this);
  }

  componentDidMount(){
    const filters = this.state;

    this.props.fetchFindableGroups(filters);
  }

  invokeQuery(e){
    e.preventDefault;
    console.log(`fetching groups with current state ${this.state}`);

    this.props.fetchFindableGroups(this.state);
  }

  updatefilters(filter){
    return (e) => {
      console.log(`updating ${filter} to: ${e.target.value}`);

      if (filter === 'radi'){
        // if the filter is radi this is what you wanna do .
        this.setState({[filter]: e.target.value}, () => {
          // on success (in this call back), invoke the fetcher
          this.props.fetchFindableGroups(this.state);
        });
      } else {
        // if the filter is NOT radi, then you only want to update the state part.
        // without the success callback
        this.setState({[filter]: e.target.value})
      }

    };
  }

  updateQueryType(queryType){
    return (e) => {
      this.setState({queryType: e.target.value});
    };
  }

  displayRadi(n){
    if (n > 100) {
      return "any distance";
    }else{
      return `${n} miles`;
    }
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
                onChange={this.updatefilters('query')}
              />
              <i className="fas fa-search"></i>
            </div>

            <div className="location-filter-section">
              within
              <ul className="radi-dropdown">
              <span className="search-radius location-inputs" >
                {this.displayRadi(this.state.radi)}
              </span>
                <ul className="radi-dropdown-container">
                  <li onClick={this.updatefilters('radi')} className="radi-option" value="2">2 miles</li>
                  <li onClick={this.updatefilters('radi')} className="radi-option" value="5">5 miles</li>
                  <li onClick={this.updatefilters('radi')} className="radi-option" value="10">10 miles</li>
                  <li onClick={this.updatefilters('radi')} className="radi-option" value="20">20 miles</li>
                  <li onClick={this.updatefilters('radi')} className="radi-option" value="50">50 miles</li>
                  <li onClick={this.updatefilters('radi')} className="radi-option" value="100">100 miles</li>
                  <li onClick={this.updatefilters('radi')} className="radi-option" value="12455">any distance</li>
                </ul>
              </ul>
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
    fetchFindableGroups: (filters) => dispatch(fetchFindableGroups(filters)),
  };
};

const SearchContainer = connect(msp, mdp)(SearchBar);

export default SearchContainer;
