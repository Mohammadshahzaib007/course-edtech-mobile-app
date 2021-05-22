import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import Typography from "./UI/Typography";

const Filter = () => {
  return (
    <View style={styles.filterContainer}>
      <Typography variant="paragraphMedium">Filter name :</Typography>
      <View>
        <View style={styles.filterItemContainer}>
          <Typography variant="paragraphSmall" style={{ color: "#fff" }}>
            #css
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterContainer: { flexDirection: "row" },

  filterItemContainer: {
    width: 54,
    height: 24,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
  },
});
