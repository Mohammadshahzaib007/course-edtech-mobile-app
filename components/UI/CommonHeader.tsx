import React from "react";
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";
import Typography from "./Typography";
import { Ionicons } from "@expo/vector-icons";

type PropsType = {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
};

const CommonHeader = (props: PropsType) => {
  const { onPress, title } = props;

  return (
    <View style={styles.header}>
      {onPress && (
        <IconButton style={{ height: 40, width: 40 }} onPress={onPress}>
          <Ionicons name="chevron-back" size={13} color="black" />
        </IconButton>
      )}

      <Typography
        variant="heading1"
        style={{ flex: 1, textAlign: "center" }}
        numberOfLines={1}
      >
        {title}
      </Typography>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    marginTop: 12,
    alignItems: "center",
    flexDirection: "row",
  },
});
