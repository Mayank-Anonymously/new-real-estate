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
      <ExpoStatusBar style="light" backgroundColor="white" />
      <ImageBackground
        source={require("../../assets/images/background/splash_background.png")}
        style={styles.content}
      >
        <Image
          source={require("../../assets/images/showcase_images/splash.png")}
          style={{ resizeMode: "contain", width: 400, height: 200 }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={[styles.text, { fontSize: 27, fontStyle: "italic" }]}>
            Welcome to{" "}
          </Text>
          <Text style={[styles.text, { fontSize: 46 }]}>Rentaxo</Text>
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
        </View>

        <Button
          mode="contained"
          onPress={() => navigation.navigate("Root")}
          buttonColor="#567DF4"
          style={{ borderRadius: 9, marginHorizontal: 20, marginTop: 50 }}
        >
          GET STARTED
        </Button>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: 400,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
  },
});
