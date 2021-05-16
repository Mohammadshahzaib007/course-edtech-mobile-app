import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from "react-native";

type PropsType = {
  children: React.ReactNode;

  style?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const IconButton = (props: PropsType) => {
  const { children, onPress, style } = props;

  return (
    <View style={{ overflow: "hidden", borderRadius: 50 }}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={{ ...styles.btn, ...(style as Object) }}>
          {children}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  btn: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#BEBAB3",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
