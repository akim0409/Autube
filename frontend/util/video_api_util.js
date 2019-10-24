export const fetchVideos = () => {
  debugger;
  return $.ajax({
    method: "GET",
    url: "/api/videos"
  });
};

export const fetchVideo = id => {
  debugger;
  return $.ajax({
    method: "GET",
    url: `/api/videos/${id}`
  });
};

export const createVideo = video => {
  debugger;
  return $.ajax({
    method: "POST",
    url: "/api/videos",
    data: video,
    contentType: false,
    processData: false
  });
};

export const updateVideo = video => {
  debugger;
  return $.ajax({
    method: "PATCH",
    url: `/api/videos/${video.id}`,
    data: video,
    contentType: false,
    processData: false
  });
};

export const deleteVideo = id => {
  debugger;
  return $.ajax({
    method: "DELETE",
    url: `/api/videos/${id}`
  });
};
