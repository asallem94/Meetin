export const createComment = (comment) => {
  return $.ajax({
    url: `/api/${comment.type}/${comment.typeId}/comments`,
    method: "POST",
    data: { comment },
  });
};
