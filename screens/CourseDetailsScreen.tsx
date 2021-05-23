import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/core";
import IconButton from "../components/UI/IconButton";
import { Ionicons } from "@expo/vector-icons";
import Typography from "../components/UI/Typography";
import PriceCard from "../components/UI/PriceCard";
import CustomButton from "../components/UI/CustomButton";

const DEVICE_WIDTH = Dimensions.get("window").width;

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
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <IconButton style={{ height: 40, width: 40 }}>
            <Ionicons name="chevron-back" size={13} color="black" />
          </IconButton>

          <Typography
            variant="heading1"
            style={{ flex: 1, textAlign: "center" }}
          >
            HTML
          </Typography>
        </View>

        {/* BACKGROUND IMAGE CONTAINER */}
        <View style={{ width: "100%" }}>
          <ImageBackground
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: "https://img-b.udemycdn.com/course/240x135/2337794_eff5_3.jpg?secure=1rhbAsfy8oCdK5FLNUWygg%3D%3D%2C1621754512",
            }}
          ></ImageBackground>
        </View>

        {/* PRICE CONTAINER */}
        <View
          style={{ width: "100%", marginVertical: 16, alignItems: "flex-end" }}
        >
          <PriceCard style={{ margin: 0 }} price="$ 50" />
        </View>

        {/* TEXT CONTAINER */}
        <View style={{ width: "100%" }}>
          <Typography variant="heading1">About the course</Typography>

          <Typography
            variant="paragraphMedium"
            style={{ marginTop: 4, marginBottom: 16 }}
          >
            You can launch a new career in web develop- ment today by learning
            HTML &amp; CSS. You don't need a computer science degree or
            expensive software. All you need is a computer, a bit of time, a lot
            of determination, and a teacher you trust.
          </Typography>

          <Typography variant="heading1" style={{ marginBottom: 4 }}>
            Duration
          </Typography>
          <Typography variant="paragraphMedium">1 h 30 min</Typography>
        </View>

        {/* BUTTON CONTAINER */}
        <View style={{ width: "100%", marginTop: "auto" }}>
          <CustomButton variant="buttonMediumText">Add to cart</CustomButton>
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
