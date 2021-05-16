import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

type PropsType = {
  children: React.ReactNode;
};

const DismissKeyboard = ({ children }: PropsType) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;
