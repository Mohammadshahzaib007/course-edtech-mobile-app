import React from "react";
import { StyleSheet, Text, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import CustomTextInput from "./CustomTextInput";
import IconButton from "./IconButton";

type PropsType = {
  queryHandler?: (text: string) => void;
};

const SearchBox = ({ queryHandler }: PropsType) => {
  return (
    <View style={styles.searchContainer}>
      <CustomTextInput
        onChangeText={queryHandler}
        placeholder="Search course"
        style={{ flex: 1, borderWidth: 0 }}
      />
      <View style={{ marginRight: 5 }}>
        <IconButton style={{ borderWidth: 0 }}>
          <Feather name="search" size={24} color="black" />
        </IconButton>
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchContainer: {
    // width: 343,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#BEBAB3",
    flexDirection: "row",
    alignItems: "center",
  },
});
