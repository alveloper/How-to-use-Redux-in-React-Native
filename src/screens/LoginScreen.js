import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
export { LoginScreen };