import React from 'react';
import Moment from 'moment';
import { merge } from 'lodash';

class GroupMeetinsCalendar extends React.Component{
  constructor(props){
    super(props);
    const today = this.getToday();
    const lastDay = this.getLastDay(today);
    this.state = {filterStartDate: today, filterEndDate: lastDay,  eventFilterType: "All Meetins"};
    this.renderMonth = this.renderMonth.bind(this);
    this.renderWeek = this.renderWeek.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.getToday = this.getToday.bind(this);
    this.getFirstDay = this.getFirstDay.bind(this);
    this.getLastDay = this.getLastDay.bind(this);
    this.setStartFilterDate = this.setStartFilterDate.bind(this);

  }
  componentDidMount(){
    this.props.fetchFindableEvents(this.props.filters);
  }

  getToday(){
    return new Date();
  }

  getLastDay(date){
    let lastDate = new Date(date);
    lastDate.setMonth(lastDate.getMonth()+1);
    lastDate.setDate(0);
    return lastDate;
  }
  getFirstDay(date){
    let firstDay = new Date(date);
    firstDay.setDate(1);
    return firstDay;
  }

  changeMonth(direction){

    const that = this;
    return (e) => {
      e.preventDefault();
      const newDate = new Date(that.state.filterStartDate);
      let d;
      if (direction === "next") {

        newDate.setMonth(newDate.getMonth()+1);
        console.log(d);
        // this.setState({month: this.state.month+1});
      } else {
        newDate.setMonth(newDate.getMonth()-1);
        // this.setState({month: this.state.month-1});
      }
      this.setState( {filterStartDate: this.getFirstDay(newDate), filterEndDate: this.getLastDay(newDate)} );
      this.props.updateFilters(this.state);
      this.props.fetchFindableEvents(merge({}, this.props.filters,
        {filterStartDate: Moment(newStartDate).format("L"),
        filterEndDate: Moment(this.state.filterEndDate).format("L")}) );
    };
  }

  populateDates(){
    const firstDay = this.getFirstDay(this.state.filterStartDate);
    const lastDay = this.getLastDay(this.state.filterStartDate);
    const startDay = firstDay.getDay();
    const endDay = lastDay.getDate();
    const cal = [];
    let i=1;
    let empty = 0;

    while (i < lastDay.getDate()) {
      let week = [];

      for (let j = 0; j < 7; j++) {
        if (empty < startDay){
          empty++;
          week.push(-1);
        }else{
          if (i > endDay){
            week.push(-1);
            i++;
          }else{
            week.push(i);
            i++;
          }
        }
      }
      cal.push(week);
    }

    return cal;
  }

  renderWeek(week){
    return week.map((day, indx) => (
        <li key={indx} className="calendar-meetin-cell" >
          {day > -1 ? day : ""}
        </li>
      )
    );
  }

  setStartFilterDate(day){
    return (e) => {
      console.log(this);
      if (e.currentTarget.value){
        const newStartDate = new Date(this.state.filterStartDate);
        newStartDate.setDate(e.currentTarget.value);
        this.setState({filterStartDate: newStartDate});
        this.props.updateFilters(this.state);
        this.props.fetchFindableEvents(merge({}, this.props.filters,
          {filterStartDate: Moment(newStartDate).format("L"),
          filterEndDate: Moment(this.state.filterEndDate).format("L")}) );
      }

    };
  }

  renderMonth(month){
    return month.map((week, indx) => (
        <ul key={indx} className="calendar-row">
          {this.renderWeek(week)}
        </ul>
      )
    );
  }

  displayCalendar(){
    const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysOfWeek = days.map((day, indx) => (
      <li key={indx} className="calendar-cell week-cell">{day}</li>
      )
    );

    const dates = this.populateDates();

    return (
      <div className="calendar">
        <ul className="calendar-row calendar-header">
          <div className="calendar-title">
            <h4 className="calendar-title">{months[this.state.filterStartDate.getMonth()]} </h4>
            <h4 className="calendar-title">{this.state.filterStartDate.getFullYear()}</h4>
          </div>
          <div>
            <button onClick={this.changeMonth("prev")} className="calendar-buttons">&lang;</button>
            <button onClick={this.changeMonth("next")} className="calendar-buttons">&rang;</button>
          </div>
        </ul>
        <ul className="calendar-row daysOfWeek">
          {daysOfWeek}
        </ul>
        {this.renderMonth(dates)}
      </div>
    );
  }

  updateFilterType(filterT){
    return () => {
      this.setState({eventFilterType: filterT});
      this.props.updateFilters(this.state);
      this.props.fetchFindableEvents(merge({}, this.props.filters,
        {filterStartDate: Moment(this.state.filterStartDate).format("L"),
        filterEndDate: Moment(this.state.filterEndDate).format("L")}) );
    };
  }
  displayFilterTypeSelector() {
    return (
      <div className="filter-selector">
        <div onClick={this.updateFilterType("All Meetins")} className={(this.state.eventFilterType==="All Meetins") ? "event-main-filter-item selected-event-filter" : "event-main-filter-item"}>
          All Meetins
        </div>
        <div onClick={this.updateFilterType("My Meetins")} className={(this.state.eventFilterType==="My Meetins") ? "event-main-filter-item selected-event-filter" : "event-main-filter-item"}>
          My Meetins
        </div>
        <div onClick={this.updateFilterType("I'm going")} className={(this.state.eventFilterType==="I'm going") ? "event-main-filter-item selected-event-filter" : "event-main-filter-item"}>
          I'm going
        </div>
      </div>
    );
  }

  render(){
    return (
        <div className="event-filters-box">
          {this.displayCalendar()}
        </div>
    );
  }
}

export default GroupMeetinsCalendar;
