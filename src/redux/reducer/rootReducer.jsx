import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import userReducer from "./userReducer";
import permissionReducer from "./permissionReducer";
import roleReducer from "./roleReducer";
import newsletterReducer from "./newsletterReducer";
import blogReducer from "./blogReducer";
const rootReducer = combineReducers({
  account: accountReducer,
  user: userReducer,
  permission: permissionReducer,
  role: roleReducer,
  newsletter: newsletterReducer,
  blog: blogReducer,
});

export default rootReducer;
