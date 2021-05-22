import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import IntroScreen from "../screens/IntroScreen";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const auth = createStackNavigator();

type PropsType = {
  step: number;
  goToNextHandler: () => void;
};

const AuthScreen = ({ step, goToNextHandler }: PropsType) => (
  <auth.Navigator
    // common screen  configirations (styles)
    screenOptions={{
      headerLeft: () => null,
      headerShown: false,
      headerStyle: { backgroundColor: "#fff", elevation: 0 },
      headerTintColor: "#3C3A36",
      headerTitleStyle: {
        alignSelf: "flex-end",
        fontFamily: "rubik-medium",
        fontSize: 14,
      },
    }}
  >
    {/* Onboarding screen */}
    <auth.Screen
      name="Intro"
      options={{
        title: step !== 3 ? "Skip" : "",
        headerShown: true,
      }}
    >
      {(props) => (
        <IntroScreen {...props} step={step} goToNextHandler={goToNextHandler} />
      )}
    </auth.Screen>

    {/* Auth screens */}
    <auth.Screen name="Login" component={Login} />
    <auth.Screen name="Signup" component={Signup} />
  </auth.Navigator>
);

export default AuthScreen;
