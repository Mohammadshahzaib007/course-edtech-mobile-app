import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IntroScreen from "./screens/IntroScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = async () => {
  Font.loadAsync({
    "rubik-regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "rubik-medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "rubik-bold": require("./assets/fonts/Rubik-Bold.ttf"),
  });
};

const stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

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
      <stack.Navigator>
        <stack.Screen
          name="Intro"
          options={{ title: "Skip" }}
          component={IntroScreen}
        />
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
