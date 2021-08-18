import axios from "axios";

// 1. actions: dispatch something (object, key and value ...)
export const onUserLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://netflix-example.herokuapp.com/user/mock-login",
        { email, password }
      );
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