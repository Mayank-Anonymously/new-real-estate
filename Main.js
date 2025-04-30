"use client";
import React, { useEffect } from "react";
import RootStackNavigator from "./navigation/AuthNavigation/NonAuthenticatedNavigation";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthRootStackNavigator from "./navigation/AuthNavigation/AuthenticatedNavigation";

const Main = () => {
  const checking = async () => {
    const isAuthenticated = AsyncStorage.getItem("isAuthenticated");
    console.log(AsyncStorage.getItem("isAuthenticated"));
    console.log(isAuthenticated);
    return true;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {checking() === "true" ? (
        <AuthRootStackNavigator />
      ) : (
        <RootStackNavigator />
      )}
      <StatusBar style="dark" />
    </View>
  );
};

export default Main;
