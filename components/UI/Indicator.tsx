import React from "react";
import { StyleSheet, Text, View } from "react-native";

type PropsType = {
  active: boolean;
};

const Indicator = (props: PropsType) => {
  const { active } = props;

  return (
    <View
      style={[active ? styles.active : styles.inactive, styles.common]}
    ></View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  common: {
    marginLeft: 12,
    marginRight: 12,
  },

  active: {
    width: 16,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#65AAEA",
  },

  inactive: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#D5D4D4",
  },
});
