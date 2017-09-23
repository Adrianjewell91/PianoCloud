export const getTracks = () => {
  return $.ajax({
    method: "GET",
    url: "/api/tracks"
  });
}

export const getTrack = (title) => {
  //right here try the editing.
  let parsedTitle = "";
  for(let i=0; i < title.length; i++) {
    if (title.slice(i,i+3) === "%20") {
      parsedTitle += " ";
    } else {
      parsedTitle += title[i];
    }
  }

  return $.ajax({
    method: "GET",
    url: `/api/tracks/${parsedTitle}`
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
