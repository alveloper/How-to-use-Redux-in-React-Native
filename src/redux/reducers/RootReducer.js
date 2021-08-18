import { combineReducers } from "redux";
import { userReducer } from "./UserReducer"


// 3. root reducer: combine multiple reducers in the single unit
// (5) make root reducer. `userReducer,` means `userReducer: userReducer`.
// if you have another reducer, then add rootReducer
export const rootReducer = combineReducers({
  userReducer,
});