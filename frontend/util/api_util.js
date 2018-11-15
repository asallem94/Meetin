export const fetchInterests = () => {
  return $.ajax({
    url: 'api/interests',
    method: "GET"
  });
};

export const fetchFindableGroups = (filters) => {
  return $.ajax({
    url: 'api/groups',
    method: "GET",
    data: {filters},
  });
};
export const fetchGroup = (id) => {
  return $.ajax({
    url: `api/groups/${id}`,
    method: "GET",
  });
};
