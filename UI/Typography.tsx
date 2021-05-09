import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";

type VariantTypes =
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

type propsType = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  variant?: VariantTypes;
};

const Typography = (props: propsType) => {
  const { children, style, variant } = props;

  let variantStyle = {};

  switch (variant) {
    case "display1":
      variantStyle = styles.display1;
      break;

    case "display2":
      variantStyle = styles.display2;
      break;

    case "display3":
      variantStyle = styles.display3;
      break;

    case "heading1":
      variantStyle = styles.heading1;
      break;

    case "heading2":
      variantStyle = styles.heading2;
      break;

    case "paragraphLarge":
      variantStyle = styles.paragraphLarge;
      break;

    case "paragraphMedium":
      variantStyle = styles.paragraphMedium;
      break;

    case "paragraphSmall":
      variantStyle = styles.paragraphSmall;
      break;

    case "buttonLarge":
      variantStyle = styles.buttonLarge;

    case "buttonMedium":
      variantStyle = styles.buttonMedium;

    case "buttonSmall":
      variantStyle = styles.buttonSmall;
  }

  return (
    <Text style={{ ...styles.common, ...variantStyle, ...(style as Object) }}>
      {children}
    </Text>
  );
};

export default Typography;

const commonDisplayStyles = {
  fontFamily: "rubik-bold",
  letterSpacing: -1,
};

const commonHeadingStyles = {
  fontFamily: "rubik-medium",
  letterSpacing: -0.5,
};

const commonParagraphyStyles = {
  fontFamily: "rubik-regular",
  letterSpacing: -0.5,
};

const styles = StyleSheet.create({
  common: {
    color: "#10182B",
  },

  display1: {
    ...commonDisplayStyles,
    fontSize: 56,
    lineHeight: 58.8,
  },

  display2: {
    ...commonDisplayStyles,
    fontSize: 40,
    lineHeight: 46,
  },

  display3: {
    ...commonDisplayStyles,
    fontSize: 32,
    lineHeight: 42,
  },

  heading1: {
    ...commonHeadingStyles,
    fontSize: 24,
    lineHeight: 32,
  },

  heading2: {
    ...commonHeadingStyles,
    fontSize: 20,
    lineHeight: 26,
  },

  paragraphLarge: {
    ...commonParagraphyStyles,
    fontSize: 16,
    lineHeight: 26,
  },

  paragraphMedium: {
    ...commonParagraphyStyles,
    fontSize: 14,
    lineHeight: 21,
  },

  paragraphSmall: {
    ...commonParagraphyStyles,
    fontSize: 12,
    lineHeight: 18,
  },

  buttonLarge: {
    ...commonHeadingStyles,
    fontSize: 18,
    lineHeight: 22,
  },

  buttonMedium: {
    ...commonHeadingStyles,
    fontSize: 16,
    lineHeight: 18,
  },

  buttonSmall: {
    ...commonHeadingStyles,
    fontSize: 14,
    lineHeight: 16,
  },
});
