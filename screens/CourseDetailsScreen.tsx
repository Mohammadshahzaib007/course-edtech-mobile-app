import { RouteProp, useRoute } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

type ParamsType = {
  CourseDetailsScreen: {
    courseId: string | number;
  };
};

const CourseDetailsScreen = () => {
  const { params } = useRoute<RouteProp<ParamsType, "CourseDetailsScreen">>();

  const { courseId } = params;

  return (
    <SafeAreaView style={styles.screen}>
      <Text>I am course Details screen {courseId}</Text>
    </SafeAreaView>
  );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
