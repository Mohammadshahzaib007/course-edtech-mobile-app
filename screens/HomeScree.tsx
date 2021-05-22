import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import IconButton from "../components/UI/IconButton";
import Typography from "../components/UI/Typography";
import { Fontisto } from "@expo/vector-icons";
import Filter from "../components/Filter";

const DEVICE_WIDTH = Dimensions.get("window").width;

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        {/* header/top section */}
        <View style={styles.header}>
          {/* text container */}
          <View>
            <Typography variant="paragraphLarge">Hello,</Typography>
            <Typography variant="display3">Juana Antonieta</Typography>
          </View>

          {/* button container */}
          <View>
            <IconButton>
              <Fontisto name="bell" size={24} color="black" />
            </IconButton>
          </View>
        </View>
      </View>

      <View>
        <Filter />
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
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 80
  },
});
