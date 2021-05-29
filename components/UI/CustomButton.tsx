import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from "react-native";
import Typography from "./Typography";

import Color from "../../constants/colors";
import { VariantTypes } from "../../types/types";

type PropsType = {
  children: React.ReactNode;
  variant: VariantTypes;
  style?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  color?: string;
};

const CustomButton = (props: PropsType) => {
  const { children, variant, onPress, style, color } = props;

  return (
    <View style={{ overflow: "hidden", borderRadius: 16 }}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={{ ...styles.btn, ...(style as Object) }}>
          <Typography
            variant={variant}
            style={{ color: color ? color : "#fff" }}
          >
            {children}
          </Typography>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    // width: 311,
    height: 56,
    backgroundColor: Color.primary,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
