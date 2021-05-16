import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

const CustomTextInput = (props: TextInputProps) => {
  return (
    <TextInput {...props} style={[styles.input, props.style]} placeholderTextColor="#78746D" />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    borderColor: "#BEBAB3",
    borderWidth: 1,
    height: 53,
    borderRadius: 12,
    paddingLeft: 16,
    color: "#78746D",
    fontSize: 14,
    lineHeight: 21,
  },
});
