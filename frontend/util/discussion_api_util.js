export const fetchDiscussions = (groupId) => {
  return $.ajax({
    url: `/api/groups/${groupId}/discussions`,
    method: "GET"
  });
};

export const fetchDiscussion = (id, offset) => {
  return $.ajax({
    url: `api/discussions/${id}`,
    method: "GET",
    data: { offset }
  });
};

export const createDiscussion = (discussion) => {
  return $.ajax({
    url: `/api/groups/${discussion.groupId}/discussions`,
    method: "POST",
    data: { discussion },
  });
};
