import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Filter from "../Filter";
import IconButton from "../UI/IconButton";
import SearchBox from "../UI/SearchBox";
import Typography from "../UI/Typography";
import { Fontisto } from "@expo/vector-icons";

type PropsType = {
  categiroyHandler: (selectedCategiroy: string) => void;
};

const HomeHeader = ({ categiroyHandler }: PropsType) => {
  return (
    <View style={{ marginBottom: 24 }}>
      {/* header/top section */}
      <View style={styles.header}>
        {/* text container */}
        <View>
          <Typography variant="paragraphLarge">Hello,</Typography>
          <Typography variant="display3" numberOfLines={1}>
            Shahzaib
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
        <Filter categiroyHandler={categiroyHandler} filterName="Categiroy" options={["CSS", "UX", "Swift", "UI"]} />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 16,
    // marginBottom: 80,
  },
});
