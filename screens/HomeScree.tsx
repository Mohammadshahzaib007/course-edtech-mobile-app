import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
  FlatList,
} from "react-native";
import IconButton from "../components/UI/IconButton";
import Typography from "../components/UI/Typography";
import { Fontisto } from "@expo/vector-icons";
import Filter from "../components/Filter";
import CourseCard from "../components/UI/CourseCard";
import SearchBox from "../components/UI/SearchBox";
import { courses } from "../data/data";

const DEVICE_WIDTH = Dimensions.get("window").width;

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          {/* header/top section */}
          <View style={styles.header}>
            {/* text container */}
            <View>
              <Typography variant="paragraphLarge">Hello,</Typography>
              <Typography variant="display3" numberOfLines={1}>
                Juana Antonieta
              </Typography>
            </View>

            {/* button container */}
            <View>
              <IconButton>
                <Fontisto name="bell" size={24} color="black" />
              </IconButton>
            </View>
          </View>

          {/* search box container */}
          <View style={{ width: "100%", paddingVertical: 16 }}>
            <SearchBox />
          </View>

          {/* filter */}
          <View style={{ width: "100%" }}>
            <Filter
              filterName="Categiroy"
              options={["CSS", "UX", "Swift", "UI"]}
            />
          </View>

          {/* content container */}
          <View style={{ width: "100%", marginTop: 24 }}>
            {/* rendering the courses */}
            {
              <FlatList
                data={courses}
                renderItem={({ item }) => (
                  <CourseCard
                    courseDuration={item.courseDuration}
                    courseTitle={item.courseTitle}
                    courseDescription={item.courseDescription}
                  />
                )}
              />
            }
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
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
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    // marginBottom: 80,
  },
});
