import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomPropsType } from "../../types/types";
import Custompagination from "../UI/Custompagination";

interface PropsType extends CustomPropsType {}

const Footer = (props: PropsType) => {
  const {
    goToNext,
    goToPrevious,
    totalItems,
    itemsPerPage,
    currentPageNumber,
    goToClickedPageNumber
  } = props;

  return (
    <View style={{ width: "100%" }}>
      <Custompagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
        currentPageNumber={currentPageNumber}
        goToClickedPageNumber={goToClickedPageNumber}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
