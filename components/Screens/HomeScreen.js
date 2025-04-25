import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Dimensions,
  ScrollView,
} from "react-native";
import LocationHeader from "../common/LocationHeader";
import SearchBar from "./SearchBar";
import { LinearGradient } from "expo-linear-gradient";
import AvailableforRent from "./HomeScreenComp/AvailableforRent";
import NeedToList from "./HomeScreenComp/NeedToList";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [active, setActive] = useState("I need to rent");
  const translateX = useRef(new Animated.Value(0)).current;
  const indicatorX = useRef(new Animated.Value(0)).current;

  const handleTabPress = (tab, index) => {
    setActive(tab);

    // Slide content
    Animated.spring(translateX, {
      toValue: -width * index,
      useNativeDriver: true,
    }).start();

    // Move indicator
    Animated.spring(indicatorX, {
      toValue: index * 150, // assuming button width of 150
      useNativeDriver: true,
    }).start();
  };

  const renderButton = (label, index) => {
    const isActive = active === label;

    return (
      <Pressable onPress={() => handleTabPress(label, index)}>
        <View style={[styles.buttonBase, !isActive && styles.inactiveButton]}>
          <Text style={[styles.buttonText, !isActive && { color: "black" }]}>
            {label}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <LocationHeader />
      <SearchBar />

      <Text style={styles.welcomeText}>Welcome to NJ housing</Text>

      {/* Toggle with sliding indicator */}
      <View style={styles.toggleContainer}>
        <View style={{ flexDirection: "row", position: "relative" }}>
          {/* Sliding Indicator */}
          <Animated.View
            style={[
              styles.indicator,
              {
                transform: [{ translateX: indicatorX }],
              },
            ]}
          />
          {renderButton("I need to rent", 0)}
          {renderButton("I want to list", 1)}
        </View>
      </View>

      {/* Sliding Tab Content */}
      <Animated.View
        style={[
          styles.slider,
          {
            width: width * 1,
            transform: [{ translateX }],
          },
        ]}
      >
        <View style={[styles.tabContent, { width }]}>
          <AvailableforRent />
        </View>

        <View style={[styles.tabContent, { width }]}>
          <NeedToList />
        </View>
      </Animated.View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    paddingHorizontal: 10,
  },
  welcomeText: {
    fontSize: 17,
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: "bold",
  },
  toggleContainer: {
    backgroundColor: "whitesmoke",
    padding: 8,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: -10,
  },
  buttonBase: {
    width: 150,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 100,
    zIndex: 1,
  },
  inactiveButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontWeight: "600",
    color: "white",
  },
  indicator: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 150,
    height: "100%",
    borderRadius: 100,
    backgroundColor: "#315EE7",
    zIndex: 0,
  },
  slider: {
    flexDirection: "row",
    marginTop: 20,
  },
  tabContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  contentText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
});
