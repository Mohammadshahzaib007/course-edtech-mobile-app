import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";

type propsType = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  variant?:
    | "display1"
    | "display2"
    | "display3"
    | "heading1"
    | "heading2"
    | "paragraphLarge"
    | "paragraphMedium"
    | "paragraphSmall"
    | "buttonLarge"
    | "buttonMedium"
    | "buttonSmall";
};

const Typography = (props: propsType) => {
  const { children, style } = props;

  return <Text style={style}>{children}</Text>;
};

export default Typography;

const styles = StyleSheet.create({
  display1: {
    fontFamily: "rubik-bold",
    fontSize: 56,
    lineHeight: 58.8,
    letterSpacing: -1,
    color: "#10182B",
  },

  display2: {
    fontFamily: "rubik-bold",
    fontSize: 40,
    lineHeight: 46,
    letterSpacing: -1,
    color: "#10182B",
  },

  display3: {
    fontFamily: "rubik-bold",
    fontSize: 32,
    lineHeight: 42,
    letterSpacing: -1,
    color: "#10182B",
  },

  heading1: {},

  heading2: {},

  paragraphLarge: {},

  paragraphMedium: {},

  paragraphSmall: {},

  buttonLarge: {},

  buttonMedium: {},

  buttonSmall: {},
});
