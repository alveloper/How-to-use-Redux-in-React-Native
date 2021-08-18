// 2. reducers: a pure function which is taking some input and it is taking the same output depends on the condition
// reducer is required to catch the action and store the data in state.
// and other components can access the same
export const userReducer = (state = {}, action) => {
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