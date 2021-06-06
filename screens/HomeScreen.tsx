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
import Footer from "../components/Home/Footer";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const HomeScreen = () => {
  const navigation = useNavigation();

  const [categiroy, setCategiroy] = useState<string>("");

  const [query, setQuery] = useState("");

  const [course, setCourse] = useState<Course[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const queryHandler = (text: string) => {
    setQuery(text);
    console.log(text);
  };

  const categiroyHandler = (selectedCategiroy: string) => {
    setCategiroy((prevState) =>
      prevState === selectedCategiroy ? "" : selectedCategiroy
    );
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchCourses = async () => {
      try {
        const response = await axios.get<FetchedCoursesType>(
          `/courses/?page=1&page_size=10&category=${categiroy}&has_coding_exercises=True&ordering=highest-rated`
        );
        console.log(response.data.results?.length);

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
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [categiroy]);

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
                  <HomeHeader
                    selectedFilter={categiroy}
                    categiroyHandler={categiroyHandler}
                  />
                  {isLoading && (
                    <ActivityIndicator
                      style={{ marginTop: DEVICE_HEIGHT * 0.25 }}
                      size="large"
                      color={colors.primary}
                    />
                  )}
                </>
              )}
              ListFooterComponent={() =>
                isLoading ? <View></View> : <Footer />
              }
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
