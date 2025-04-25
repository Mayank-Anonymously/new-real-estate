import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const slideAnim = useRef(new Animated.Value(-100)).current; // starts off-screen

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
        inputStyle={styles.inputStyle}
        iconColor="#567DF4"
      />
    </Animated.View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 5,
  },
  searchBar: {
    backgroundColor: "whitesmoke",
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "whitesmoke",
  },
  inputStyle: {
    fontSize: 13,
    padding: -10,
  },
  vector: {
    position: "absolute",
    left: "13%",
    right: "13.04%",
    top: "7.29%",
    bottom: "7.29%",
    borderRadius: 12, // optional for smoothness
  },
});

/* Vector */
