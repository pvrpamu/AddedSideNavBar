import { combineReducers } from "redux";
import counterwidget from "./counterwidget";
import dashboard from "./dashboard";

export default combineReducers({
  counterwidget,
  dashboard
});
