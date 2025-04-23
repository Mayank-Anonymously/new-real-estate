import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{
          backgroundColor: "whitesmoke",
          height: 48,
          padding: -10,
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
