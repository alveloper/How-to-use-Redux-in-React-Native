import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/RootReducer"

// 4. store: will be accessible from our application and in various parts
// (6) make store
export const store = createStore(rootReducer, applyMiddleware(thunk));
