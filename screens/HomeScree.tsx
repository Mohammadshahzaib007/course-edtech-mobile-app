import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScree = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Home Scree</Text>
    </SafeAreaView>
  );
};

export default HomeScree;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
