import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import PropertyCard from "../cards/ProppertCard";
import states from "../../utils/County.json";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { fetchallcounty } from "../../utils/apicalls/fetchallcounty";
const RenderList = ({ item }) => {
  const navigation = useNavigation();

  return (
    <PropertyCard
      onPress={() =>
        navigation.navigate("PropertyDetail", {
          title: item.title,
          rent: item.price,
        })
      }
      title={item.title}
      location={item.address}
      price={item.price}
      description={item.description}
      image={item.image}
    />
  );
};

const Propertlistings = ({ closeBottomSheet }) => {
  const navigation = useNavigation();
    const [ data  , setData] = useState([])
    useEffect(() =>  {
      fetchallcounty(setData)
    } ,  [])
  
  return (
    <View style={{ backgroundColor: "white", alignItems: "center" }}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "90%",
          marginHorizontal: 20,
          margin: 20,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
            closeBottomSheet();
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../assets/navigation/back.png")}
          />
        </Pressable>
        <Text style={{ fontWeight: "bold", color: "#1A1E25", fontSize: 19 }}>
          Showing {data.length} Results
        </Text>
        <Text>
          <Ionicons name="filter-outline" size={23} color="black" />
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <RenderList item={item} />}
        style={{ marginBottom: "35%" }}
      />
    </View>
  );
};

export default Propertlistings;

const styles = StyleSheet.create({});
