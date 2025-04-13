import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import PropertyCard from "../../cards/ProppertCard";
import { ScrollView } from "react-native";
import { Button, Paragraph } from "react-native-paper";
import InternationalMigrations from "../../cards/DestinationCards";

const height = Dimensions.get("window").height;
const NeedToList = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Near your location
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Paragraph style={{ color: "grey" }}>
            243 Properties in Surabaya
          </Paragraph>
          <Button
            style={{ width: 50, height: 40 }}
            labelStyle={{ fontSize: 12 }}
            mode="text"
          >
            See all
          </Button>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </ScrollView>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Top Rated</Text>
            <Button
              style={{ width: 50, height: 40 }}
              labelStyle={{ fontSize: 12 }}
              mode="text"
            >
              See all
            </Button>
          </View>
          <ScrollView horizontal={true}>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </ScrollView>
        </View>
        <InternationalMigrations />
      </View>
    </ScrollView>
  );
};

export default NeedToList;

const styles = StyleSheet.create({});
