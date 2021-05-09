import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Typography from "../UI/Typography";

const IntroScreen = () => {
  return (
    <View style={styles.screen}>
      <Typography style={{ fontSize: 40, fontFamily: "rubik-bold" }}>
        I am Intro Screen
      </Typography>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
