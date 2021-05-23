import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  FlatList,
} from "react-native";
import CourseCard from "../components/UI/CourseCard";
import { courses } from "../data/data";
import { useNavigation } from "@react-navigation/core";

import HomeHeader from "../components/Home/Header";

const DEVICE_WIDTH = Dimensions.get("window").width;

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        {/* content container */}
        <View style={{ width: "100%" }}>
          {/* rendering the courses */}
          {
            <FlatList
              data={courses}
              renderItem={({ item }) => (
                <CourseCard
                  onPress={() =>
                    navigation.navigate("CourseDetails", {
                      courseId: item.id,
                    })
                  }
                  courseDuration={item.courseDuration}
                  courseTitle={item.courseTitle}
                  courseDescription={item.courseDescription}
                  thumbnailUrl={item.thumbnailUrl}
                  price={item.price}
                />
              )}
              ListHeaderComponent={HomeHeader}
            />
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 25,
  },
  container: {
    width: DEVICE_WIDTH * 0.91466,
  },
});
