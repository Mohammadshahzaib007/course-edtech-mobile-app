import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScree";
import ProfileScreen from "../screens/ProfileScreen";
import YourCoursesScreen from "../screens/YourCoursesScreen";
import SettingScreen from "../screens/SettingScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const Home = () => {
  return (
    <Tab.Navigator tabBarOptions={{tabStyle: {
        alignItems: 'center',
        justifyContent: 'center'
        
    }}}>
      <Tab.Screen
        name="Home"
        options={{ title: "Home" }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{ title: "Profile" }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="YourCourses"
        options={{ title: "Your courses" }}
        component={YourCoursesScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{ title: "Settings" }}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

const HomeStacks = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

export default HomeStacks;
