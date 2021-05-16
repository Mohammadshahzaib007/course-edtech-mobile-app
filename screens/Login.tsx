import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import LoginPng from "../assets/login.png";
import Typography from "../components/UI/Typography";
import CustomButton from "../components/UI/CustomButton";

const Login = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Image style={styles.img} source={LoginPng} />

        <View style={styles.textContainer}>
          <Typography variant="heading1">Log in</Typography>
          <Typography
            variant="paragraphMedium"
            style={{ color: "#78746D", marginVertical: 8 }}
          >
            Login with social networks
          </Typography>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <FontAwesome name="facebook-f" size={20} color="white" />
          </View>
          <View style={styles.iconWrapper}>
            <FontAwesome name="instagram" size={20} color="white" />
          </View>

          <View style={styles.iconWrapper}>
            <FontAwesome name="google-plus" size={20} color="white" />
          </View>
        </View>

        <View>
          <Typography>Test</Typography>
        </View>

        <View>
          <CustomButton variant="buttonMediumText">Log in</CustomButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
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
