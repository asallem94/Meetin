import React from 'react';
import Moment from 'moment';
import CalendarIndex from './calendar_index';
import { merge } from 'lodash';

class Calendar extends React.Component{
  constructor(props){
    super(props);
    const today = this.getToday();
    const lastDay = this.getLastDay(today);
    // this.state = {month: mon, year: yr, day: date, filterStartDate: Moment(this.d).format('L'), filterEndDate: new Date(this.d.getFullYear(), this.d.getMonth()+1, 0)};
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
      let newDate;
      if (direction === "today"){
        newDate = new Date();
      } else {
        newDate = new Date(that.state.filterStartDate);
      }
      // debugger
      if (direction === "next") {
        newDate.setMonth(newDate.getMonth()+1);
      }
      if (direction === "prev") {
        newDate.setMonth(newDate.getMonth()-1);
      }
      console.log(this);
      this.setState( {filterStartDate: (direction === "today") ? newDate : this.getFirstDay(newDate), filterEndDate: this.getLastDay(newDate)},
        () => {
          this.props.fetchFindableEvents(merge({}, this.props.filters,
            {filterStartDate: Moment(this.state.filterStartDate).format("L"),
            filterEndDate: Moment(this.state.filterEndDate).format("L")})
          );
        }
      );
      // this.props.updateFilters.bind(this.state)
      // this.props.updateFilters(this.state);
      // debugger

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
        <li key={indx} onClick={this.setStartFilterDate(day)} value={day > -1 ? day : null} className={(this.state.filterStartDate.getDate()===day) ? "today-cell calendar-cell" : (day > -1) ? "calendar-cell clickable" : "calendar-cell"} >
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
      <button onClick={this.changeMonth("today")} className="calendar-buttons clickable">Today</button>
        <ul className="calendar-row calendar-header">
          <div className="calendar-title">
            <h4 className="calendar-title">{months[this.state.filterStartDate.getMonth()]} </h4>
            <h4 className="calendar-title">{this.state.filterStartDate.getFullYear()}</h4>
          </div>
          <div className="calendar-button-direction">
            <button onClick={this.changeMonth("prev")} className="calendar-buttons clickable"><i className="fas fa-less-than"></i></button>
            <button onClick={this.changeMonth("next")} className="calendar-buttons clickable"><i className="fas fa-greater-than"></i></button>
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
        <div onClick={this.updateFilterType("All Meetins")} className={(this.state.eventFilterType==="All Meetins") ? "event-main-filter-item clickable selected-event-filter" : "event-main-filter-item clickable"}>
          All Meetins
        </div>
        <div onClick={this.updateFilterType("My Meetins")} className={(this.state.eventFilterType==="My Meetins") ? "event-main-filter-item clickable selected-event-filter" : "event-main-filter-item clickable"}>
          My Meetins
        </div>
        <div onClick={this.updateFilterType("I'm going")} className={(this.state.eventFilterType==="I'm going") ? "event-main-filter-item clickable selected-event-filter" : "event-main-filter-item clickable"}>
          I'm going
        </div>
      </div>
    );
  }

  render(){
    return (
      <div className="event-component">
        <div className="event-filters-box">
          {this.displayFilterTypeSelector()}
          {this.displayCalendar()}
        </div>


        <div className="display-events">
          <CalendarIndex filters={this.eventfilters}/>
        </div>
      </div>
    );
  }
}

export default Calendar;
