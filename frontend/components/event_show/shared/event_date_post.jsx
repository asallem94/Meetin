import React from 'react';

const EventDatePost = ({start_date}) => {
  const date = new Date(start_date);
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = date.getMonth();

  return (
    <div className="event-date-post">
      <section className="event-post-date">
        {date.getDate()}
      </section>
      <section className="event-post-month">
        {months[month]}
      </section>
    </div>
  );
};

export default EventDatePost
