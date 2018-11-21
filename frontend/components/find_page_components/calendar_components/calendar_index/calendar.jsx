import React from 'react';

class Calendar extends React.Component{
  constructor(props){
    super(props);
    this.d = new Date();
    const mon = this.d.getMonth();
    const yr = this.d.getFullYear();
    const date = this.d.getDate();
    this.state = {month: mon, year: yr, day: date, start_date: this.d};
    this.renderMonth = this.renderMonth.bind(this);
    this.renderWeek = this.renderWeek.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
  }
  componentDidMount(){

  }

  changeMonth(direction){
    return () => {
      if (direction === "next") {
        this.setState({month: this.state.month+1});
      } else {
        this.setState({month: this.state.month-1});
      }
    };
  }

  populateDates(){
    const firstDay = new Date(this.state.year, this.state.month, 1);
    const lastDay = new Date(this.state.year, this.state.month + 1, 0);
    const startDay = firstDay.getDay();
    const endDay = lastDay.getDate();
    const cal = [];
    let i=1;
    let empty = 0;

    while (i < lastDay.getDate()) {
      console.log(i);
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
        <li key={indx} tabIndex={day > -1 ? "123" : ""} className={(this.d.getDate()===day) ? "today-cell calendar-cell" : "calendar-cell"} >
          {day > -1 ? day : ""}
        </li>
      )
    );
  }

  renderMonth(month){
    return month.map((week, indx) => (
        <ul key={indx} className="calendar-row">
          {this.renderWeek(week)}
        </ul>
      )
    );
  }

  render(){
    const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysOfWeek = days.map((day, indx) => (
      <li key={indx} className="calendar-cell week-cell">{day}</li>
      )
    );

    const dates = this.populateDates();

    const monthHTML = this.renderMonth(dates);
    return (
      <div className="calendar">
        <ul className="calendar-row calendar-header">
          <div className="calendar-title">
            <h4 className="calendar-title">{months[this.state.month]} </h4>
            <h4 className="calendar-title">{this.state.year}</h4>
          </div>
          <div>
            <button onClick={this.changeMonth("next")} className="calendar-buttons">&lang;</button>
            <button onClick={this.changeMonth("prev")} className="calendar-buttons">&rang;</button>
          </div>
        </ul>
        <ul className="calendar-row daysOfWeek">
          {daysOfWeek}
        </ul>
        {this.renderMonth(dates)}
      </div>
    );
  }
}

export default Calendar;
