import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import SplashScreen from "../../components/Screens/SplashScreen";
import DrawerNavigator from "../DrawerNavigator";

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Login"
        options={{ headerShown: false, headerTitle: "" }}
        component={SplashScreen}
      ></RootStack.Screen>
      <RootStack.Screen
        name="Root"
        options={{ headerShown: false, headerTitle: "" }}
        component={DrawerNavigator}
      ></RootStack.Screen>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
