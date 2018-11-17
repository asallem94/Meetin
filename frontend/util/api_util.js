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

export const createGroup = (group) => {
  return $.ajax({
    url: `api/groups`,
    method: "POST",
    data: { group },
  });
};

export const updateGroup = (group) => {
  return $.ajax({
    url: `api/groups/${group.id}`,
    method: "PATCH",
    data: { group },
  });
};
