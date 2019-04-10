import * as APIUtil from "../util/video_api_util";

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
export const CLEAR_VIDEO_ERRORS = "CLEAR_VIDEO_ERRORS";

const receiveVideos = payload => ({
  type: RECEIVE_VIDEOS,
  payload
});

const receiveVideo = payload => ({
  type: RECEIVE_VIDEO,
  payload
});

const receiveVideoErrors = errors => ({
  type: RECEIVE_VIDEO_ERRORS,
  errors
});

const clearVideoErrors = () => ({
  type: CLEAR_VIDEO_ERRORS
});

const removeVideo = id => ({
  type: REMOVE_VIDEO,
  id
});

export const fetchVideos = () => dispatch =>
  APIUtil.fetchVideos().then(payload => dispatch(receiveVideos(payload)));

export const fetchVideo = id => dispatch =>
  APIUtil.fetchVideo(id)
    .then(payload => dispatch(receiveVideo(payload)))
    .fail(err => {
      dispatch(receiveVideoErrors(err.responseJSON));
    });

export const createVideo = video => dispatch =>
  APIUtil.createVideo(video)
    .then(payload => dispatch(receiveVideo(payload)))
    .fail(err => {
      dispatch(receiveVideoErrors(err.responseJSON));
    });

export const updateVideo = video => dispatch =>
  APIUtil.updateVideo(video)
    .then(payload => dispatch(receiveVideo(payload)))
    .fail(err => {
      dispatch(receiveVideoErrors(err.responseJSON));
    });

export const deleteVideo = id => dispatch =>
  APIUtil.deleteVideo(id).then(video => dispatch(removeVideo(video.id)));
