import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";
import IconButton from "./IconButton";
import { Ionicons } from "@expo/vector-icons";
import Typography from "./Typography";

import { CustomPropsType } from "../../types/types";

const Custompagination = (props: CustomPropsType) => {
  const {
    goToNext,
    goToPrevious,
    totalItems,
    itemsPerPage,
    currentPageNumber,
    goToClickedPageNumber,
  } = props;

  const pageNumbers: number[] = [];

  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log("length", pageNumbers.length);

  return (
    <View
      style={{
        width: "100%",
        overflow: "hidden",
        display: totalItems > itemsPerPage ? "flex" : "none",
        borderRadius: 50,
      }}
    >
      <View style={styles.paginationContainer}>
        {currentPageNumber !== 1 && (
          <IconButton
            onPress={() => goToPrevious()}
            style={{ borderWidth: 0, height: 24, width: 24 }}
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </IconButton>
        )}

        {pageNumbers.map((pageNum) => (
          <IconButton
            onPress={() => goToClickedPageNumber(pageNum)}
            key={pageNum}
            style={{
              width: 24,
              height: 24,
              borderWidth: pageNum === currentPageNumber ? 2 : 0,
              borderColor: "#fff",
            }}
          >
            <Typography style={{ color: "#fff" }}>{pageNum}</Typography>
          </IconButton>
        ))}

        {currentPageNumber !== pageNumbers.length && (
          <IconButton
            onPress={() => goToNext()}
            style={{ borderWidth: 0, height: 24, width: 24 }}
          >
            <Ionicons name="chevron-forward" size={24} color="#fff" />
          </IconButton>
        )}
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
