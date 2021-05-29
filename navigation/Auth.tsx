import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import IntroScreen from "../screens/IntroScreen";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const auth = createStackNavigator();

type PropsType = {
  step: number;
  goToNextHandler: () => void;
};

const AuthScreen = ({ step, goToNextHandler }: PropsType) => {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(false);

  const shouldShowOnboardingScreen = async () => {
    try {
      const value = await AsyncStorage.getItem("@shouldShowOnboardingScreen");

      if (value) {
        setShouldShowOnboarding(false);
      } else {
        setShouldShowOnboarding(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    shouldShowOnboardingScreen();
  }, []);

  return (
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
      {shouldShowOnboarding && (
        <auth.Screen
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
        </auth.Screen>
      )}

      {/* Auth screens */}
      <auth.Screen name="Login" component={Login} />
      <auth.Screen name="Signup" component={Signup} />
    </auth.Navigator>
  );
};

export default AuthScreen;
