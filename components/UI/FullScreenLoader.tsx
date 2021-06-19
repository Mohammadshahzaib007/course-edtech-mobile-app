import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import colors from "../../constants/colors";

const FullScreenLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default FullScreenLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
