import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CommonHeader from "../components/UI/CommonHeader";
import Container from "../components/UI/Container";

const YourCoursesScreen = () => {
  return (
    <View style={styles.screen}>
      <Container>
        <CommonHeader title="Your Courses" />
      </Container>
    </View>
  );
};

export default YourCoursesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 25,
    backgroundColor: "#fff",
  },
});
