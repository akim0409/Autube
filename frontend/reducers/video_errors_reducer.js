import { RECEIVE_VIDEO, RECEIVE_VIDEO_ERRORS } from "../actions/videos_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO:
      return [];
    case RECEIVE_VIDEO_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
