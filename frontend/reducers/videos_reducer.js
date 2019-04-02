import {
  RECEIVE_VIDEOS,
  RECEIVE_VIDEO,
  REMOVE_VIDEO
} from "../actions/videos_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO:
      return merge({}, state, {
        [action.payload.video.id]: action.payload.video
      });
    case RECEIVE_VIDEOS:
      return merge({}, state, action.payload.videos);
    case REMOVE_VIDEO:
      const newState = merge({}, state);
      delete newState[action.id];
      //action.videoID?
      return newState;
    default:
      return state;
  }
};
