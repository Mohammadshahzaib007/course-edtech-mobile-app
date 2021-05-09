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

  heading1: {
    fontFamily: "rubik-medium",
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.5,
    color: "#10182B",
  },

  heading2: {
    fontFamily: "rubik-medium",
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: -0.5,
    color: "#10182B",
  },

  paragraphLarge: {
    fontFamily: "rubik-regular",
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: -0.5,
    color: "#10182B",
  },

  paragraphMedium: {
    fontFamily: "rubik-regular",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.5,
    color: "#10182B",
  },

  paragraphSmall: {
    fontFamily: "rubik-regular",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.5,
    color: "#10182B",
  },

  buttonLarge: {
    fontFamily: "rubik-medium",
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.5,
    color: "#10182B",
  },

  buttonMedium: {
    fontFamily: "rubik-medium",
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: -0.5,
    color: "#10182B",
  },

  buttonSmall: {
    fontFamily: "rubik-medium",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.5,
    color: "#10182B",
  },
});
