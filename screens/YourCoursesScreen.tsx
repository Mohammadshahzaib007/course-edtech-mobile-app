import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CommonHeader from "../components/UI/CommonHeader";
import Container from "../components/UI/Container";
import CourseCard from "../components/UI/CourseCard";
import { courses } from "../data/data";
// import { useNavigation } from "@react-navigation/core";

const YourCoursesScreen = () => {
  // const navigation = useNavigation();

  const yourCourses = courses.slice(0, 2);

  return (
    <View style={styles.screen}>
      <Container>
        <FlatList
          data={yourCourses}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CourseCard
              leftCourseDuration={`Left ${item.courseDuration}`}
              courseTitle={item.courseTitle}
              courseDescription={item.courseDescription}
              thumbnailUrl={item.thumbnailUrl}
            />
          )}
          ListHeaderComponent={() => (
            <View style={{ marginBottom: 16 }}>
              <CommonHeader title="Your Courses" />
            </View>
          )}
        />
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
