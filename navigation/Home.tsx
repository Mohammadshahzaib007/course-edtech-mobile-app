import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import YourCoursesScreen from "../screens/YourCoursesScreen";
import SettingScreen from "../screens/SettingScreen";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../constants/colors";
import { Foundation } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CourseDetailsScreen from "../screens/CourseDetailsScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "#BEBAB3",
        style: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderColor: "#BEBAB3",
          borderWidth: 1,
          height: 98,
          elevation: 0,
        },
        tabStyle: {
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          overflow: "hidden",
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          paddingVertical: 25,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="person" size={size} color={color} />
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="YourCourses"
        options={{
          title: "Your courses",
          tabBarIcon: ({ size, color }) => (
            <Foundation name="book-bookmark" size={size} color={color} />
          ),
        }}
        component={YourCoursesScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
        }}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

const HomeStacks = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="CourseDetails" component={CourseDetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStacks;
