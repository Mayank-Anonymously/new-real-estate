import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Foundation, Entypo, EvilIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomText from "./Text";
import CustomTextBold from "./BoldCustomtext";

const LocationHeader = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <CustomText style={{ marginLeft: 10, fontSize: 18, color: "white" }}>
            Hi there Searching in
          </CustomText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/location_icon.png")}
              style={{
                marginLeft: 10,
                width: 20,
                height: 20,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            />
            <CustomTextBold
              style={{
                fontSize: 14,
                marginLeft: 5,
                color: "white",
              }}
            >
              New Jersey
            </CustomTextBold>
            <Entypo
              name="chevron-down"
              color="white"
              size={26}
              style={{ marginLeft: 5 }}
            />
          </View>
        </View>
        <View>
          <EvilIcons name="user" size={50} color={"white"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LocationHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
});
