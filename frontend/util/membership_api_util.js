export const unjoinGroup = (membershipId) => {
  return $.ajax({
    url: `/api/groups_memberships/${membershipId}`,
    method: "DELETE",
  });
};

export const joinGroup = (groupId) => {
  return $.ajax({
    url: `/api/groups/${groupId}/groups_memberships`,
    method: "POST",
  });
};
