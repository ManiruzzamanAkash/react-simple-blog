import { combineReducers } from "redux";
import AuthReducer from "./auth/AuthReducer";
import PostReducer from "./post/PostReducer";


const RootReducer = combineReducers({
    auth: AuthReducer,
    post: PostReducer,
});
  
export default RootReducer;
  