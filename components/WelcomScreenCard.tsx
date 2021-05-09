import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Typography from "../UI/Typography";

type PropsType = {
  heading: string;
  subheading: string;
  imgPath: string;
};

const WelcomScreenCard = (props: PropsType) => {
  const { heading, subheading, imgPath } = props;

  return (
    <View>
      <View>
        {/* @ts-ignore */}
        <Image source={imgPath} style={{ width: 375, height: 264 }} />
      </View>
      <View style={styles.textContainer}>
        <Typography variant="heading1" style={{ textAlign: "center" }}>
          {heading}
        </Typography>
        <Typography
          variant="paragraphMedium"
          style={{ marginTop: 8, color: "#78746D" }}
        >
          {subheading}
        </Typography>
      </View>
    </View>
  );
};

export default WelcomScreenCard;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
});
