import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import PriceCard from "./PriceCard";
import Typography from "./Typography";

const CourseCard = () => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{ uri: "https://picsum.photos/200/300?grayscale" }}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <PriceCard price="$ 50" />
      </ImageBackground>
      <View style={styles.contentContainer}>
        <Typography
          variant="paragraphSmall"
          style={{ color: "#5BA092", marginBottom: 4 }}
        >
          3 h 30 min
        </Typography>
        <Typography variant="heading1" style={{ marginBottom: 4 }}>
          UI Advanced
        </Typography>
        <Typography variant="paragraphMedium">
          Advanced mobile interface design
        </Typography>
      </View>
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
    overflow: "hidden",
  },

  bgImage: {
    width: "100%",
    height: 194,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
});
