export const getTracks = () => {
  return $.ajax({
    method: "GET",
    url: "/api/tracks"
  });
}

export const getTrack = (title) => {

  return $.ajax({
    method: "GET",
    url: `/api/tracks/${title}`
  });
}

export const createTrack = track => {
  return $.ajax({
    method: 'POST',
    url: '/api/tracks',
    datatype: "json",
    data: track,
    contentType: false,
    processData: false
  });
};

export const updateTrack = (track, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/tracks/${id}`,
    datatype: "json",
    data: track,
    contentType: false,
    processData: false
  });
};

export const deleteTrack = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/tracks/${id}`
  });
};
