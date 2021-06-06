import React, { useEffect, useRef, useState } from "react";
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

  const flatListRef = useRef<FlatList<Course> | null>(null);

  const scrollToTop = () => {
    flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  //-------------------------------------------------------------------------------------------------------
  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // getting current items to show on the page
  const currentItems = course.slice(indexOfFirstItem, indexOfLastItem);

  // for paginating to the next page
  // getting pageNumber from the Pagination Component
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  // by clicking on the backward button
  const goToPrevious = () => {
    setCurrentPage((prevState) => prevState - 1);
    scrollToTop();
  };

  // by clicking on the forward button
  const goToNext = () => {
    setCurrentPage((prevState) => prevState + 1);
    scrollToTop();
  };

  const queryHandler = (text: string) => {
    setQuery(text);
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
          `/courses/?page=1&page_size=1000&category=${categiroy}&has_coding_exercises=True&ordering=highest-rated`
        );

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

  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log(`now the query can be used ${query}`);
    }, 600);

    // clean up function
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <SafeAreaView style={styles.screen}>
      <Container>
        {/* content container */}
        <View style={{ width: "100%" }}>
          {/* rendering the courses */}
          <>
            <HomeHeader
              queryHandler={queryHandler}
              selectedFilter={categiroy}
              categiroyHandler={categiroyHandler}
            />
            {
              <FlatList
                ref={flatListRef}
                data={isLoading ? [] : currentItems}
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
                  isLoading ? (
                    <View></View>
                  ) : (
                    <Footer
                      totalItems={course.length}
                      itemsPerPage={10}
                      goToPrevious={goToPrevious}
                      goToNext={goToNext}
                      currentPageNumber={currentPage}
                      goToClickedPageNumber={paginate}
                    />
                  )
                }
              />
            }
          </>
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
