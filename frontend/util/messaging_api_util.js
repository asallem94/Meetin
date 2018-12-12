
export const fetchAllMyChats = () => {
  return $.ajax({
    url: `api/chats/`,
    method: "GET"
  });
};

export const fetchChat = (id) => {
  return $.ajax({
    url: `api/chats/${id}`,
    method: "GET",
  });
};

export const createChat = (chat) => {
  return $.ajax({
    url: `/api/chats`,
    method: "POST",
    data: { chat },
  });
};

export const createMessage = (message) => {
  return $.ajax({
    url: `/api/chats/${message.chat_id}/messages`,
    method: "POST",
    data: { message },
  });
};

export const fetchUsers = (userFilter) => {
  return $.ajax({
    url: `/api/users`,
    method: "GET",
    data: { userFilter },
  });
};
