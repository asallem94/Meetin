export const fetchInterests = () => {
  return $.ajax({
    url: 'api/interests',
    method: "GET"
  });
}

export const fetchFindableGroups = (filters) => {
  return $.ajax({
    url: 'api/interests',
    method: "GET",
    data: filters,
  })
}
