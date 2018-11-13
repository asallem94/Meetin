export const fetchInterests = () => {
  return $.ajax({
    url: 'api/interests',
    method: "GET"
  })
}
