import React from "react";
import {
  GestureResponderEvent,
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
  thumbnailUrl: string;
  onPress: (event: GestureResponderEvent) => void;
  price: number | string;
};

const CourseCard = (props: PropsType) => {
  const {
    courseDuration,
    courseTitle,
    courseDescription,
    thumbnailUrl,
    onPress,
    price,
  } = props;

  return (
    <View style={{ borderRadius: 8, overflow: "hidden" }}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.cardContainer}>
          <ImageBackground
            source={{
              uri: thumbnailUrl,
            }}
            style={styles.bgImage}
            resizeMode="cover"
          >
            <PriceCard price={price} />
          </ImageBackground>
          <View style={styles.contentContainer}>
            <Typography
              numberOfLines={1}
              variant="paragraphSmall"
              style={{ color: "#5BA092", marginBottom: 4 }}
            >
              {courseDuration}
            </Typography>
            <Typography
              numberOfLines={1}
              variant="heading1"
              style={{ marginBottom: 4 }}
            >
              {courseTitle}
            </Typography>
            <Typography numberOfLines={2} variant="paragraphMedium">
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
    minHeight: 297,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BEBAB3",
    overflow: "hidden",
    marginBottom: 24,
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
