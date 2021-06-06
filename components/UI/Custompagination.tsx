import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";
import IconButton from "./IconButton";
import { Ionicons } from "@expo/vector-icons";
import Typography from "./Typography";

type PropsType = {
  itemsPerPage: number;
  totalItems: number;
  goToNext: () => void;
  goToPrevious: () => void;
  currentPageNumber: number;
};

const Custompagination = (props: PropsType) => {
  const {
    goToNext,
    goToPrevious,
    totalItems,
    itemsPerPage,
    currentPageNumber,
  } = props;

  const pageNumbers: number[] = [];

  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <View style={{ width: "100%", overflow: "hidden", borderRadius: 50 }}>
      <View style={styles.paginationContainer}>
        <IconButton
          onPress={() => goToPrevious()}
          style={{ borderWidth: 0, height: 24, width: 24 }}
        >
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </IconButton>

        {pageNumbers.map((pageNum) => (
          <Typography key={pageNum} style={{ color: "#fff" }}>
            {pageNum}
          </Typography>
        ))}

        <IconButton
          onPress={() => goToNext()}
          style={{ borderWidth: 0, height: 24, width: 24 }}
        >
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </IconButton>
      </View>
    </View>
  );
};

export default Custompagination;

const styles = StyleSheet.create({
  paginationContainer: {
    width: "100%",
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    elevation: 10,
    overflow: "hidden",
  },
});
