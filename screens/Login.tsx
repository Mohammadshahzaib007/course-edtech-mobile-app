import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome } from "@expo/vector-icons";


import Typography from "../components/UI/Typography";
import CustomButton from "../components/UI/CustomButton";
import CustomTextInput from "../components/UI/CustomTextInput";
import DismissKeyboard from "../components/DismissKeyboard";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;

const Login = () => {

  const navigation = useNavigation()

  const removeLocalStorage = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding')
      console.log('removed')
    } catch (error) {
      console.log('Error removing', error)
    }
  }  

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screen}>
       
        <View>
          {/* img */}
          <Image style={styles.img} source={require('../assets/login.png')} />

          {/* text container */}
          <View style={styles.textContainer}>
            <Typography variant="heading1">Log in</Typography>
            <Typography
              variant="paragraphMedium"
              style={{ color: "#78746D", marginVertical: 8 }}
            >
              Login with social networks
            </Typography>
          </View>

          {/* icon container */}
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

          <View style={{ width: windowWidth * 0.91 }}>
            <CustomTextInput placeholder="Email" />

            <CustomTextInput
              placeholder="Password"
              style={{ marginVertical: 16 }}
            />

            <Typography
              variant="buttonSmallText"
              style={{ textAlign: "center", marginBottom: 16 }}
              onPress={() => alert("clicked")}
            >
              Forgot Password?
            </Typography>

            <CustomButton variant="buttonMediumText" onPress={removeLocalStorage} style={{ width: "100%" }}>
              Log in
            </CustomButton>

            <Typography
              variant="buttonSmallText"
              style={{ textAlign: "center", marginTop: 16 }}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign up
            </Typography>
          </View>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default Login;

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
