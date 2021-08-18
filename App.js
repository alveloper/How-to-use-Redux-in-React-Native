import React from "react";
import { LoginScreen } from "./src/screens/LoginScreen";
import { Provider } from "react-redux";
import { store } from "./src/redux";

export default function App() {
  return (
    // wrap the component inside provider and give the parameter store.
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
}
