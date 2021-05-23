import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import IconButton from "../components/UI/IconButton";
import { Ionicons } from "@expo/vector-icons";
import Typography from "../components/UI/Typography";
import PriceCard from "../components/UI/PriceCard";
import CustomButton from "../components/UI/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import { courses } from "../data/data";
import { Course } from "../types/types";

const DEVICE_WIDTH = Dimensions.get("window").width;

type ParamsType = {
  CourseDetailsScreen: {
    courseId: string | number;
  };
};

const CourseDetailsScreen = () => {
  const { params } = useRoute<RouteProp<ParamsType, "CourseDetailsScreen">>();
  const navigation = useNavigation();

  //Id of the course that has to be shown
  const { courseId } = params;

  const course = courses.find((item) => item.id === courseId) as Course;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <ScrollView>
          {/* HEADER */}
          <View style={styles.header}>
            <IconButton
              style={{ height: 40, width: 40 }}
              onPress={() => navigation.navigate("Home")}
            >
              <Ionicons name="chevron-back" size={13} color="black" />
            </IconButton>

            <Typography
              variant="heading1"
              style={{ flex: 1, textAlign: "center" }}
              numberOfLines={1}
            >
              {course?.courseTitle}
            </Typography>
          </View>

          {/* BACKGROUND IMAGE CONTAINER */}
          <View style={{ width: "100%" }}>
            <ImageBackground
              style={styles.image}
              resizeMode="cover"
              source={{
                uri: course?.thumbnailUrl,
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
            <PriceCard style={{ margin: 0 }} price={course?.price} />
          </View>

          {/* TEXT CONTAINER */}
          <View style={{ width: "100%" }}>
            <Typography variant="heading1">About the course</Typography>

            <Typography
              variant="paragraphMedium"
              style={{ marginTop: 4, marginBottom: 16 }}
            >
              {course?.aboutTheCourse}
            </Typography>

            <Typography variant="heading1" style={{ marginBottom: 4 }}>
              Duration
            </Typography>
            <Typography variant="paragraphMedium">
              {course?.courseDuration}
            </Typography>
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
      </View>
    </SafeAreaView>
  );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 25,
  },
  container: {
    width: DEVICE_WIDTH * 0.91466,
    flex: 1,
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
