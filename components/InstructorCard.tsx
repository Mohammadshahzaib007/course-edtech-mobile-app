import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Typography from "./UI/Typography";

type PropTypes = {
  instructorImgUrl: string;
  instructorName: string;
  jobTitle: string;
};

const InstructorCard = (props: PropTypes) => {
  const { instructorImgUrl, instructorName, jobTitle } = props;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.avatar}
        resizeMode="cover"
        source={{
          uri: instructorImgUrl,
        }}
      ></ImageBackground>

      <View style={{ marginLeft: 10 }}>
        <Typography numberOfLines={1} variant="heading2">
          {instructorName}
        </Typography>
        <Typography
          style={{ maxWidth: "85%", marginTop: 5 }}
          numberOfLines={2}
          variant="buttonSmallText"
        >
          {jobTitle}
        </Typography>
      </View>
    </View>
  );
};

export default InstructorCard;

const styles = StyleSheet.create({
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden",
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
});
