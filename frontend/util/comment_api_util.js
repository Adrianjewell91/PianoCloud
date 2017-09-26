export const getComments = (track_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/tracks/${track_id}/comments`
  });
}

export const createComment = (comment, track_id) => {
  return $.ajax({
    method: "POST",
    url: `/api/tracks/${track_id}/comments`,
    data: { comment }
  })
}
