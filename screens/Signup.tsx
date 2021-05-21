import React, { useReducer } from "react";
import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Typography from "../components/UI/Typography";
import CustomButton from "../components/UI/CustomButton";
import CustomTextInput from "../components/UI/CustomTextInput";
import DismissKeyboard from "../components/DismissKeyboard";
import { useNavigation } from "@react-navigation/core";
import IconButton from "../components/UI/IconButton";
import { Ionicons } from "@expo/vector-icons";

import {
  SignupState as State,
  SignupLocalAction as Action,
  SET_EMAIL,
  SET_NAME,
  SET_PASSWORD,
} from "../types/State";

const windowWidth = Dimensions.get("window").width;

const initialState: State = {
  name: "",
  email: "",
  password: "",
};

// reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

// COMPONENT
const Signup = () => {
  const navigation = useNavigation();

  const [state, dispatch] = useReducer(reducer, initialState);

  // signup handler
  const signupHandler = () => {
    console.log("signup credentials", state);
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screen}>
        {/* back button */}
        <View
          style={{ alignSelf: "flex-start", marginLeft: 16, marginTop: -25 }}
        >
          <IconButton onPress={() => navigation.navigate("Login")}>
            <Ionicons name="chevron-back" size={17} color="black" />
          </IconButton>
        </View>

        <View>
          {/* img */}
          <Image style={styles.img} source={require("../assets/signup.png")} />

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
            <CustomTextInput
              placeholder="Name"
              onChangeText={(value) =>
                dispatch({ type: SET_NAME, payload: value })
              }
              value={state.name}
            />

            <CustomTextInput
              placeholder="Email"
              textContentType="emailAddress"
              style={{ marginVertical: 16 }}
              onChangeText={(value) =>
                dispatch({ type: SET_EMAIL, payload: value })
              }
              value={state.email}
            />

            <CustomTextInput
              placeholder="Password"
              textContentType="password"
              value={state.password}
              onChangeText={(value) =>
                dispatch({ type: SET_PASSWORD, payload: value })
              }
            />

            <CustomButton
              variant="buttonMediumText"
              style={{ width: "100%", marginVertical: 16 }}
              onPress={signupHandler}
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
