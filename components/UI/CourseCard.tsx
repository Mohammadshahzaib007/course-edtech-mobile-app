import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import PriceCard from "./PriceCard";
import Typography from "./Typography";

type PropsType = {
  courseDuration: string;
  courseTitle: string;
  courseDescription: string;
};

const CourseCard = (props: PropsType) => {
  const { courseDuration, courseTitle, courseDescription } = props;

  return (
    <View style={{ borderRadius: 8, overflow: "hidden" }}>
      <TouchableNativeFeedback>
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
              {courseDuration}
            </Typography>
            <Typography variant="heading1" style={{ marginBottom: 4 }}>
              {courseTitle}
            </Typography>
            <Typography variant="paragraphMedium">
              {courseDescription}
            </Typography>
          </View>
        </View>
      </TouchableNativeFeedback>
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
