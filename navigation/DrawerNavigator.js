import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../components/Screens/ProfileScreen";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);
export default DrawerNavigator;
