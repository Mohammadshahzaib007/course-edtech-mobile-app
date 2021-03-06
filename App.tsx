import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import AuthScreen from "./navigation/Auth";
import Home from "./navigation/Home";
import HomeStacks from "./navigation/Home";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchFonts = async () => {
  return Font.loadAsync({
    "rubik-regular": require("./assets/fonts/Rubik-Regular.ttf"), // font-weiht: 400
    "rubik-medium": require("./assets/fonts/Rubik-Medium.ttf"), // font-weiht: 500
    "rubik-bold": require("./assets/fonts/Rubik-Bold.ttf"), // font-weiht: 700
  });
};

const RootStack = createStackNavigator();

//Component
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // this is for the onboarding screen
  const [step, setStep] = useState(1);

  //
  const goToNextHandler = () => {
    setStep((prevState) => prevState + 1);
  };

  // if user opens the App first time it will store
  // the value in the local storage.
  // if value is presents; Onboarding screen will not be shown
  const storeOnboardingScreenStatus = async () => {
    try {
      const value = await AsyncStorage.getItem("@shouldShowOnboardingScreen");

      if (value === null) {
        await AsyncStorage.setItem("@shouldShowOnboardingScreen", "true");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    storeOnboardingScreenStatus();
  }, []);

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
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Auth">
          {(props) => (
            <AuthScreen
              {...props}
              step={step}
              goToNextHandler={goToNextHandler}
            />
          )}
        </RootStack.Screen>
        <RootStack.Screen
          name="Home"
          options={{ title: "App", headerShown: false }}
          component={HomeStacks}
        />
      </RootStack.Navigator>
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
