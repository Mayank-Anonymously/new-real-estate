import React from "react";
import RootStackNavigator from "./navigation/AuthNavigation/NonAuthenticatedNavigation";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

const Main = () => {
  return (
    <View style={{flex : 1, backgroundColor:"white"}}>
      <RootStackNavigator />
      <StatusBar style="dark" />
    </View>
  );
};

export default Main;
