import React, { useState, useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import ProfileScreen from "../components/Screens/ProfileScreen";
import ExploreScreen from "../components/Screens/ExploreScreen";
import Home from "../assets/tabbaricon/home.png";
import explore from "../assets/tabbaricon/explore.png";

import SavedScreens from "../components/Screens/SavedScreens";
import { Ionicons, SimpleLineIcons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Animated, View, Dimensions, Image } from "react-native";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");

const TabNavigator = () => {
  const [focusedIndex, setFocusedIndex] = useState(0); // State to keep track of the active tab
  const bounceAnim = useRef(new Animated.Value(0)).current; // For bouncing effect

  // Animation for the drag indicator
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -4,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Dynamically update the drag indicator position based on active tab
  const renderDragIndicator = (focusedIndex) => (
    <Animated.View
      style={[
        styles.dragIndicator,
        {
          left: focusedIndex * (width / 5) + width / 10, // Set position dynamically based on tab index
          transform: [{ translateY: bounceAnim }],
        },
      ]}
    />
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "black", // <- Active tab label color
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <Image
                  source={require("../assets/tabbaricon/home.png")}
                  style={{ width: 30, height: 30, resizeMode: "contain" }}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: true,
          tabBarIcon: () => {
            return (
              <View style={{}}>
                <Image
                  source={require("../assets/tabbaricon/explore.png")}
                  style={{ width: 30, height: 40, resizeMode: "contain" }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View style={{}}>
                <Image
                  source={require("../assets/tabbaricon/profile.png")}
                  style={{ width: 30, height: 40, resizeMode: "contain" }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  gradientBg: {
    flex: 1,
    borderRadius: 15,
    overflow: "hidden",
  },
  dragIndicator: {
    position: "absolute",
    top: -8, // Position the indicator above the tab bar
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "white",
    opacity: 1,
    zIndex: 10,
  },
});
