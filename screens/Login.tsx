import React, { useReducer } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome } from "@expo/vector-icons";

import Typography from "../components/UI/Typography";
import CustomButton from "../components/UI/CustomButton";
import CustomTextInput from "../components/UI/CustomTextInput";
import DismissKeyboard from "../components/DismissKeyboard";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LoginState as State,
  SET_EMAIL,
  SET_NAME,
  SET_PASSWORD,
  SignupLocalAction as Action,
} from "../types/State";

const windowWidth = Dimensions.get("window").width;

const initialState: State = {
  password: "",
  email: "",
};

// reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};

const Login = () => {
  const navigation = useNavigation();

  const [state, dispatch] = useReducer(reducer, initialState);

  const loginHandler = () => {
    console.log("Login credentials", state);
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screen}>
        <View>
          {/* img */}
          <Image style={styles.img} source={require("../assets/login.png")} />

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
            <CustomTextInput
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={(value) =>
                dispatch({ type: SET_EMAIL, payload: value })
              }
              value={state.email}
            />

            <CustomTextInput
              placeholder="Password"
              textContentType="password"
              style={{ marginVertical: 16 }}
              onChangeText={(value) =>
                dispatch({ type: SET_PASSWORD, payload: value })
              }
              value={state.password}
            />

            <Typography
              variant="buttonSmallText"
              style={{ textAlign: "center", marginBottom: 16 }}
              onPress={() => alert("clicked")}
            >
              Forgot Password?
            </Typography>

            <CustomButton
              onPress={loginHandler}
              variant="buttonMediumText"
              style={{ width: "100%" }}
            >
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
