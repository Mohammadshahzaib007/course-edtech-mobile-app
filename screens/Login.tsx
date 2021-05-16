import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
    <View style={styles.screen}>
      <Text>I am Login Screen</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
