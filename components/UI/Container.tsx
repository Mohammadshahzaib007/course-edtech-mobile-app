import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

type PropsType = {
  children: React.ReactNode;
};

const Container = (props: PropsType) => {
  const { children } = props;

  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH * 0.91466,
    flex: 1,
    alignSelf: "center",
  },
});
