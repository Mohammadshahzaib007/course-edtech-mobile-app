import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IntroScreen from "./screens/IntroScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import HomeScree from "./screens/HomeScree";

const fetchFonts = async () => {
  return Font.loadAsync({
    "rubik-regular": require("./assets/fonts/Rubik-Regular.ttf"), // font-weiht: 400
    "rubik-medium": require("./assets/fonts/Rubik-Medium.ttf"), // font-weiht: 500
    "rubik-bold": require("./assets/fonts/Rubik-Bold.ttf"), // font-weiht: 700
  });
};

const stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // this is for the onboarding screen
  const [step, setStep] = useState(1);

  //
  const goToNextHandler = () => {
    setStep((prevState) => prevState + 1);
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => setFontLoaded(false)}
      />
    );
  }

  return (
    <NavigationContainer>
      <stack.Navigator
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
        <stack.Screen
          name="Intro"
          options={{
            title: step !== 3 ? "Skip" : "",
            headerShown: true,
          }}
        >
          {(props) => (
            <IntroScreen
              {...props}
              step={step}
              goToNextHandler={goToNextHandler}
            />
          )}
        </stack.Screen>

        {/* Auth screens */}
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Signup" component={Signup} />
        <stack.Screen name="Home" component={HomeScree} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
