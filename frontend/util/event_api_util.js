export const fetchFindableEvents = (filters) => {
  return $.ajax({
    url: 'api/events',
    method: "GET",
    data: {filters},
  });
};

export const fetchEvent = (id) => {
  return $.ajax({
    url: `api/events/${id}`,
    method: "GET",
  });
};

export const createEvent = (event) => {
  return $.ajax({
    url: `/api/groups/${event.group_id}/events`,
    method: "POST",
    data: { event },
  });
};

export const updateEvent = (event) => {
  return $.ajax({
    url: `api/events/${event.id}`,
    method: "PATCH",
    data: { event },
  });
};
