import axios from "axios";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// 1. actions: dispatch something (object, key and value ...)
export const onUserLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("URL", { email, password });
      // (1) once, we receive the data we will dispatch that data along with type and payload
      dispatch({ type: "DO_LOGIN", payload: response.data });
    } catch (error) {
      dispatch({ type: "ON_ERROR", payload: error });
    }
  };
};

// (3) make one more action
export const onFetchProduct = () => {
  return async (dispatch) => {
    try {
      const response = {
        data: [
          { name: "Macbook Pro", price: "$1500" },
          { name: "iPhone Pro", price: "$1000" },
          { name: "Nexus Pro", price: "$500" },
        ],
      };
      dispatch({ type: "FETCH_PRODUCTS", payload: response.data });
    } catch (error) {
      dispatch({ type: "ON_ERROR", payload: error });
    }
  };
};

// 2. reducers: a pure function which is taking some input and it is taking the same output depends on the condition
// reducer is required to catch the action and store the data in state.
// and other components can access the same
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "DO_LOGIN": // (2) case will be same as type in dispatch of actions
      return {
        ...state,
        user: action.payload,
      };
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ON_ERROR":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state; // (4) now userReducer is ready.
  }
};

// 3. root reducer: combine multiple reducers in the single unit
// (5) make root reducer. `userRecuder,` means `userReducer: userReducer`.
// if you have another reducer, then add rootReducer
export const rootReducer = combineReducers({
  userReducer,
});

// 4. store: will be accessible from our application and in various parts
// (6) make store 
export const store = createStore(rootReducer, applyMiddleware(thunk));
