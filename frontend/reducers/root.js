import { combineReducers } from "redux";
import entitiesReducer from "./entities";

export default combineRedcuer({
  entities: entitiesReducer
});
