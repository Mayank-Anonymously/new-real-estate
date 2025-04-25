import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Foundation, Entypo } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const LocationHeader = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={{ marginLeft: 10, fontWeight: 100 }}>
            Your Current Location
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Foundation
              name="marker"
              color="#917AFD"
              size={26}
              style={{ marginLeft: 10 }}
            />
            <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: "bold" }}>
              New Jersey, USA
            </Text>
            <Entypo
              name="chevron-down"
              color="black"
              size={26}
              style={{ marginLeft: 5 }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LocationHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
  },
});
