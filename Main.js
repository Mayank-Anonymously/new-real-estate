import React from "react";
import RootStackNavigator from "./navigation/AuthNavigation/NonAuthenticatedNavigation";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Main = () => {
  return (
    <>
      <RootStackNavigator />
      <StatusBar style="dark" />
    </>
  );
};

export default Main;
