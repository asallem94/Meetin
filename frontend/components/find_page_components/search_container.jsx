import React from 'react';
import { connect } from 'react-redux';
import { fetchFindableGroups } from '../../actions/meetin_actions'

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      queryType:"Groups",
      filters:{
        query: "",
        radius: 5,
        coord:{
          lng: this.props.currentUser.lng,
          lat: this.props.currentUser.lat
        }
      }
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.invokeQuery = this.invokeQuery.bind(this);
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
      <form className="search-component" onSubmit={this.invokeQuery}>
        <input
          type="text"
          placeholder="All Meet-ins"
          value={this.state.query}
          unchange={this.updateQuery}
        />

        <div className="filters-section">
          within
          <button className="radius" value="">
          </button>
          of
          <button className="city">
          </button>
        </div>
        <ul className="tabs">
          <li onClick={this.updateQueryType("Groups")}>Groups</li>
          <li>Calendar</li>
        </ul>
      </form>
    );
  }
}

const msp = (state) => {
  const currUserId = state.session.currentUserId;
  return {
    currentUser: state.entities.users[currUserId],
    groups: state.entities.groups
  };
};


const mdp = (dispatch) => {
  return {
    fetchFindableGroups: (filters) => dispatch(fetchFindableGroups(filters))
  };
};

const SearchContainer = connect(msp, mdp)(SearchBar);

export default SearchContainer;
