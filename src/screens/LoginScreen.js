import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { onUserLogin, onFetchProduct } from "../redux";

const _LoginScreen = (props) => {
  // (3) if there is no error, that means mapStateToProps works properly.
  const { userReducer, onUserLogin, onFetchProduct } = props;

  // (6) if TouchableOpacity works, (hit login button, and then it gives you login reference) 
  // then write the code below.
  const { user, products } = userReducer;
  console.log(user, products);

  // (4) check the userReducer
  console.log(userReducer);

  return (
    <View style={styles.container}>
      {user !== undefined && <Text>{user.firstName} {user.lastName}</Text>}
      {/* (5) triggered onUserLogin function
      Login api: https://netflix-example.herokuapp.com/user/mock-login
      index.js (in redux) is updated. 
      */}
      <TouchableOpacity
        style={{
          height: 50,
          width: 220,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: "#FF5733",
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() =>
          onUserLogin({ email: "test@test.com", password: "1234567" })
        }
      >
        <Text style={{ color: "#FFF", fontSize: 18 }}>User Login</Text>
      </TouchableOpacity>

      {/* (7) make fetch product button */}
      <TouchableOpacity
        style={{
          height: 50,
          width: 220,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: "#FF5733",
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => onFetchProduct()}
      >
        <Text style={{ color: "#FFF", fontSize: 18 }}>Fetch Products</Text>
      </TouchableOpacity>
      {products !== undefined && (
        <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 16 }}>
          {JSON.stringify(products)}
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

// (1) to connect our redux component and _LoginScreen, map the state.
const mapStateToProps = (state) => ({
  // this isn't mandatory that keeping the same name, but in this case we will do that to not make confusion.
  userReducer: state.userReducer,
});

// (2) make LoginScreen and change the original LoginScreen to _LoginScreen.
// that's because the above component is functional component, so _ is needed.
const LoginScreen = connect(mapStateToProps, { onUserLogin, onFetchProduct })(
  _LoginScreen
);

export { LoginScreen };
