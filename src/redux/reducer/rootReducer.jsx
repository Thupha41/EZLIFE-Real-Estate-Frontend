import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import userReducer from "./userReducer";
import permissionReducer from "./permissionReducer";
import roleReducer from "./roleReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  user: userReducer,
  permission: permissionReducer,
  role: roleReducer,
});

export default rootReducer;
