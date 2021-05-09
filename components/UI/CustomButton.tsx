import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableNativeFeedback,
  View,
} from "react-native";
import Typography from "./Typography";

import Color from "../../constants/colors";

type PropsType = {
  children: React.ReactNode;
  variant: "buttonLargeText" | "buttonMediumText" | "buttonSmallText";
  style?: StyleProp<TextStyle>;
};

const CustomButton = (props: PropsType) => {
  const { children, variant } = props;

  return (
    <View style={{ overflow: "hidden", borderRadius: 16 }}>
      <TouchableNativeFeedback>
        <View style={styles.btn}>
          <Typography variant={variant} style={{ color: "#fff" }}>
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
    width: 311,
    height: 56,
    backgroundColor: Color.primary,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
