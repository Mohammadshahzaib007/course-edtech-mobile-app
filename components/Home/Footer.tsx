import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Custompagination from "../UI/Custompagination";

const Footer = () => {
  return (
    <View style={{ width: "100%" }}>
      <Custompagination
        totalItems={100}
        itemsPerPage={10}
        goToNext={() => {}}
        goToPrevious={() => {}}
        currentPageNumber={1}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
