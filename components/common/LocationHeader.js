import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Foundation, Entypo } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomText from "./Text";

const LocationHeader = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <CustomText style={{ marginLeft: 10, fontWeight: 100 }}>
            Your Current Location
          </CustomText>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/location_icon.png")}
              style={{ marginLeft: 10, width: 20, height: 20 }}
            />
            <CustomText
              style={{ fontSize: 18, marginLeft: 5, fontWeight: "bold" }}
            >
              New Jersey, USA
            </CustomText>
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
