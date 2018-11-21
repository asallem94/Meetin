export const createEventResponse = (rsvp) => {
  return $.ajax({
    url: `/api/events/${rsvp.event_id}/events_rsvps`,
    method: "POST",
    data: rsvp
  });
};
export const updateEventResponse = (rsvp) => {
  return $.ajax({
    url: `/api/events/${rsvp.event_id}/events_rsvps/${rsvp.id}`,
    method: "PATCH",
    data: rsvp
  });
};
