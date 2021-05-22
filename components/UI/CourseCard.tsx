import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import PriceCard from "./PriceCard";

const CourseCard = () => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{ uri: "https://picsum.photos/200/300?grayscale" }}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <PriceCard price="$50" />
      </ImageBackground>
    </View>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  cardContainer: {
    // minWidth: 343,
    height: 297,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BEBAB3",
  },

  bgImage: {
    width: "100%",
    height: 194,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
