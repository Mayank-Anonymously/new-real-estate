// src/navigation/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import ProfileScreen from "../components/Screens/ProfileScreen";
import ExploreScreen from "../components/Screens/ExploreScreen";
import ChatScreen from "../components/Screens/ChatScreen";
import SavedScreens from "../components/Screens/SavedScreens";
import { Ionicons, SimpleLineIcons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Explore") {
          iconName = focused ? "directions" : "directions";
        } else if (route.name === "Chat") {
          iconName = focused ? "chatbox" : "chatbox-outline";
        } else if (route.name === "Saved") {
          iconName = focused ? "heart" : "heart-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "person" : "person-outline";
        }

        return (
          <>
            {route.name === "Explore" ? (
              <SimpleLineIcons name={iconName} size={size} color={color} />
            ) : (
              <Ionicons name={iconName} size={size} color={color} />
            )}
          </>
        );
      },
      tabBarActiveTintColor: "#917AFD",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Home" component={StackNavigator} />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{ headerShown: true }}
    />
    <Tab.Screen name="Chat" component={ChatScreen} />
    <Tab.Screen name="Saved" component={SavedScreens} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);
export default TabNavigator;
