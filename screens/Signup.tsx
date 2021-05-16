import React from "react";
import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SignupPng from "../assets/signup.png";
import Typography from "../components/UI/Typography";
import CustomButton from "../components/UI/CustomButton";
import CustomTextInput from "../components/UI/CustomTextInput";
import DismissKeyboard from "../components/DismissKeyboard";
import { useNavigation } from "@react-navigation/core";
import IconButton from "../components/UI/IconButton";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

const Signup = () => {
  const navigation = useNavigation();

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screen}>
        {/* back button */}
        <View style={{ alignSelf: "flex-start", marginLeft: 16 }}>
          <IconButton onPress={() => navigation.navigate("Login")}>
            <Ionicons name="chevron-back" size={17} color="black" />
          </IconButton>
        </View>

        <View>
          {/* img */}
          <Image style={styles.img} source={SignupPng} />

          {/* text container */}
          <View style={styles.textContainer}>
            <Typography variant="heading1"> Sign up </Typography>
            <Typography
              variant="paragraphMedium"
              style={{ color: "#78746D", marginVertical: 8 }}
            >
              Create your account
            </Typography>
          </View>

          <View style={{ width: windowWidth * 0.91 }}>
            <CustomTextInput placeholder="Name" />

            <CustomTextInput
              placeholder="Email"
              style={{ marginVertical: 16 }}
            />

            <CustomTextInput placeholder="Password" />

            <CustomButton
              variant="buttonMediumText"
              style={{ width: "100%", marginVertical: 16 }}
            >
              Sign up
            </CustomButton>

            <Typography
              variant="buttonSmallText"
              style={{ textAlign: "center" }}
              onPress={() => navigation.navigate("Login")}
            >
              Log in
            </Typography>
          </View>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default Signup;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 343,
    height: 253,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },

  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 16,
  },

  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#65AAEA",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
  },
});
