import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ImageBackground,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";

import Typography from "../components/UI/Typography";
import PriceCard from "../components/UI/PriceCard";
import CustomButton from "../components/UI/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import { courses } from "../data/data";
import { Course, CourseDetails } from "../types/types";
import CommonHeader from "../components/UI/CommonHeader";
import Container from "../components/UI/Container";
import { axios } from "../http/http";
import InstructorCard from "../components/InstructorCard";


type ParamsType = {
  CourseDetailsScreen: {
    courseId: string | number;
  };
};

const CourseDetailsScreen = () => {
  const { params } = useRoute<RouteProp<ParamsType, "CourseDetailsScreen">>();
  //Id of the course that has to be shown
  const { courseId } = params;

  const navigation = useNavigation();

  const [courseDetails, setCourseDetails] = useState<CourseDetails>(
    {} as CourseDetails
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get<CourseDetails>(`/courses/${courseId}`);
        const fetchedCourseDetails = response.data;
        setCourseDetails(fetchedCourseDetails);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseDetails();
    return () => {};
  }, [courseId]);

  console.log("selected course", courseId);
  const course = courses.find((item) => item.id === courseId) as Course;

  return (
    <SafeAreaView style={styles.screen}>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* HEADER */}
          <CommonHeader title="" onPress={() => navigation.navigate("Home")} />

          {/* BACKGROUND IMAGE CONTAINER */}
          <View style={{ width: "100%" }}>
            <ImageBackground
              style={styles.image}
              resizeMode="cover"
              source={{
                uri: courseDetails.image_480x270,
              }}
            ></ImageBackground>
          </View>

          {/* PRICE CONTAINER */}
          <View
            style={{
              width: "100%",
              marginVertical: 16,
              alignItems: "flex-end",
            }}
          >
            <PriceCard
              style={{ margin: 0 }}
              price={courseDetails.price_detail?.price_string}
            />
          </View>

          {/* TEXT CONTAINER */}
          <View style={{ width: "100%" }}>
            <Typography variant="heading1" style={{ marginBottom: 4 }}>
              Title
            </Typography>
            <Typography variant="heading2" style={{ marginBottom: 32 }}>
              {courseDetails.title}
            </Typography>

            <Typography variant="heading1">About the instructors</Typography>

            <View style={{ width: "100%", marginBottom: 16 }}>
              {courseDetails?.visible_instructors?.map((instructor, i) => (
                <InstructorCard
                  key={i}
                  instructorImgUrl={instructor.image_50x50}
                  instructorName={instructor.name}
                  jobTitle={instructor.job_title}
                />
              ))}
            </View>
          </View>
        </ScrollView>

        {/* BUTTON CONTAINER */}
        <View
          style={{ width: "100%", marginTop: "auto", alignItems: "center" }}
        >
          <CustomButton
            style={{ width: 338, marginTop: 8 }}
            variant="buttonMediumText"
          >
            Add to cart
          </CustomButton>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 25,
  },

  header: {
    width: "100%",
    marginTop: 12,
    alignItems: "center",
    flexDirection: "row",
  },

  image: {
    width: "100%",
    height: 275,
    marginTop: 16,
  },
});
