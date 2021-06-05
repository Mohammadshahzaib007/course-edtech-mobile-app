import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";
import CourseCard from "../components/UI/CourseCard";
import { useNavigation } from "@react-navigation/core";

import HomeHeader from "../components/Home/Header";
import Container from "../components/UI/Container";
import { axios } from "../http/http";
import { Course, FetchedCoursesType } from "../types/types";
import colors from "../constants/colors";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT= Dimensions.get("window").height;

const HomeScreen = () => {
  const navigation = useNavigation();

  const [categiroy, setCategiroy] = useState<string>("");

  const [query, setQuery] = useState("");

  const [course, setCourse] = useState<Course[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const queryHandler = (text: string) => {
    setQuery(text);
    console.log(text);
  };

  const categiroyHandler = (selectedCategiroy: string) => {
    setCategiroy(selectedCategiroy);
    console.log(categiroy);
  };

  useEffect(() => {
    // setIsLoading(true);
    const fetchCourses = async () => {
      try {
        const response = await axios.get<FetchedCoursesType>(
          "/courses/?page=2&page_size=10"
        );
        console.log(response);

        const fetchedCourses = response.data.results;

        //updating state with the fetched courses
        const courses: Course[] = [];

        fetchedCourses?.forEach((course) => {
          courses?.push({
            id: course.id,
            courseTitle: course.title,
            courseDuration: "1h",
            courseDescription: course.headline,
            aboutTheCourse: "",
            thumbnailUrl: course.image_240x135,
            price: course.price,
          });

          setCourse(courses);
        });
      } catch (error) {
      } finally {
        // setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <Container>
        {/* content container */}
        <View style={{ width: "100%" }}>
          {/* rendering the courses */}
          {
            <FlatList
              data={isLoading ? [] : course}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CourseCard
                  // onPress={() =>
                  //   navigation.navigate("CourseDetails", {
                  //     courseId: item.id,
                  //   })
                  // }
                  courseDuration={item.courseDuration}
                  courseTitle={item.courseTitle}
                  courseDescription={item.courseDescription}
                  thumbnailUrl={item.thumbnailUrl}
                  price={item.price}
                />
              )}
              ListHeaderComponent={() => (
                <>
                  <HomeHeader categiroyHandler={categiroyHandler} />
                  {isLoading && (
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: DEVICE_HEIGHT * 0.5
                      }}
                    >
                      <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                  )}
                </>
              )}
            />
          }
        </View>
      </Container>
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
