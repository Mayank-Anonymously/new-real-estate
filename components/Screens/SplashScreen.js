import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Hind-Jalandhar": require("../../assets/fonts/Hind/Hind-Regular.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/background/splash_background.png")}
        style={styles.content}
      />

      <View style={{ marginLeft: 20, justifyContent: "flex-end", top: "60%" }}>
        <Text style={[styles.text, { fontSize: 21, fontStyle: "italic" }]}>
          Welcome to{" "}
        </Text>
        <Text style={[styles.text, { fontSize: 46, fontWeight: "bold" }]}>
          Affordable NJ Housing
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: 15,
              color: "gray",
              marginTop: 20,
              fontWeight: "200",
            },
          ]}
        >
          Find the tenant, list your property in just a simple steps, in your
          hand.
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: 15,
              color: "gray",
              marginTop: 30,
              fontWeight: "200",
            },
          ]}
        >
          You are one step away.
        </Text>

        <Button
          mode="outlined"
          outlineColor="#6246ea"
          onPress={() => navigation.navigate("Login")}
          style={{
            borderColor: "#6246ea",
            borderRadius: 9,
            marginHorizontal: 20,
            marginTop: 20,
            marginRight: 40,
          }}
        >
          GET STARTED
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  content: {
    justifyContent: "center",
    width: "100%",
    height: 600,
    // alignItems: "center",
    position: "absolute",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
    fontFamily: "Hind-Jalandhar",
  },
});
