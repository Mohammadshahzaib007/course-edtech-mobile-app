import React from "react";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../constants/colors";
import Typography from "./UI/Typography";

type PropsType = {
  filterName: string;
  options: string[];
};

const Filter = (props: PropsType) => {
  const { filterName, options } = props;

  return (
    <View style={styles.filterContainer}>
      <Typography variant="paragraphMedium">{filterName} :</Typography>
      <View style={styles.optionContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginRight: 70 }}
        >
          {options.map((name, i) => (
            <View key={i} style={{ overflow: "hidden", borderRadius: 12 }}>
              <TouchableNativeFeedback>
                <View style={styles.filterItemContainer}>
                  <Typography
                    variant="paragraphSmall"
                    style={{ color: "#fff" }}
                  >
                    #{name}
                  </Typography>
                </View>
              </TouchableNativeFeedback>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterContainer: { flexDirection: "row" },

  optionContainer: {
    flexDirection: "row",
  },

  filterItemContainer: {
    minWidth: 54,
    height: 24,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
    paddingHorizontal: 10
  },
});
