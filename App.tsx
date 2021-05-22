import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import AuthScreen from "./navigation/Auth";

const fetchFonts = async () => {
  return Font.loadAsync({
    "rubik-regular": require("./assets/fonts/Rubik-Regular.ttf"), // font-weiht: 400
    "rubik-medium": require("./assets/fonts/Rubik-Medium.ttf"), // font-weiht: 500
    "rubik-bold": require("./assets/fonts/Rubik-Bold.ttf"), // font-weiht: 700
  });
};

//Component
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
      <AuthScreen step={step} goToNextHandler={goToNextHandler} />
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
