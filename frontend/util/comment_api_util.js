export const createComment = (comment) => {
  return $.ajax({
    url: `/api/${comment.type}/${comment.typeId}/comments`,
    method: "POST",
    data: { comment },
  });
};

export const fetchComment = (id) => {
  return $.ajax({
    url: `/api/comments/${id}`,
    method: "GET",
  });
};
