export const getUsers = () => {
  return $.ajax({
    method: "GET",
    url: "/api/users"
  });
}

export const getUser = (username) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${username}`
  });
}

export const updateUser = (user, id) => { //going to be like the upload form.
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${id}`,
    datatype: "json",
    data: user,
    contentType: false,
    processData: false
  });
}