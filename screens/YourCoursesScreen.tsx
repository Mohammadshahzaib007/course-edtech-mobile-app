import React from "react";
import { StyleSheet, Text, View } from "react-native";

const YourCoursesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Your Screen</Text>
    </View>
  );
};

export default YourCoursesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
