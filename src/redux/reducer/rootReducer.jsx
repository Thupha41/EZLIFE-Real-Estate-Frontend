import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import userReducer from "./userReducer";
import permissionReducer from "./permissionReducer";
import roleReducer from "./roleReducer";
import newsletterReducer from "./newsletterReducer";
const rootReducer = combineReducers({
  account: accountReducer,
  user: userReducer,
  permission: permissionReducer,
  role: roleReducer,
  newsletter: newsletterReducer,
});

export default rootReducer;
