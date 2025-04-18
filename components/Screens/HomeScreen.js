import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import LocationHeader from "../common/LocationHeader";
import SearchBar from "./SearchBar";
import TopTabs from "../../navigation/TopTabs";
const HomeScreen = ({ navigation }) => (
  <>
    <View style={styles.container}>
      <LocationHeader />
      <SearchBar />
      <View>
        <Text style={{ fontSize: 18, marginHorizontal: 10 }}>
          Welcome to Rentaxo
        </Text>
      </View>
      <TopTabs />
    </View>
  </>
);
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
});
