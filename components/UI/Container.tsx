import React from "react";
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

type PropsType = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Container = (props: PropsType) => {
  const { children, style } = props;

  return <View style={[styles.container, style]}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH * 0.91466,
    flex: 1,
    alignSelf: "center",
  },
});
