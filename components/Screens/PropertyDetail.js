import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  FlatList,
  Platform,
} from "react-native";
import {
  Ionicons,
  EvilIcons,
  Feather,
  MaterialIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import property_details from "../../utils/properties_detail.json";
import { Avatar } from "react-native-paper";

export default function PropertyDetailScreen() {
  const route = useRoute();
  const { title, image, rent } = route.params;

  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Hind-Jalandhar": require("../../assets/fonts/Hind/Hind-Regular.ttf"),
        "Hind-Jalandhar-Bold": require("../../assets/fonts/Hind/Hind-Bold.ttf"),

        "Hind-Jalandhar": require("../../assets/fonts/Hind/Hind-Light.ttf"),

        "Hind-Jalandhar": require("../../assets/fonts/Hind/Hind-Medium.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
    setData(property_details);
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        <View
          style={{
            position: "absolute",
            zIndex: 9999,
            top: 30,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
            }}
          >
            <EvilIcons name="arrow-left" size={33} />
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
            }}
          >
            <EvilIcons name="arrow-left" size={33} />
          </View>
        </View>
        <Image
          source={{
            uri: Image.resolveAssetSource(
              require(`../../assets/images/property_image/brichwood.jpeg`)
            ).uri,
          }}
          style={styles.image}
        />
        <TouchableOpacity style={styles.videoButton}>
          <Text style={styles.videoButtonText}>Watch Intro video</Text>
        </TouchableOpacity>

        {data
          .filter(
            (iex) => iex.property.name === title && iex.property.rent === rent
          )
          .map((item, index) => {
            var unit = item.property.unit;
            var utilities = item.property.utilities;
            var parking = item.property.parkingAndEntry;
            var nearbyServices = item.property.nearbyServices;
            var accessibility = item.property.accessibility;

            return (
              <View style={styles.content}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={styles.title}>{item.property.name} </Text>
                  </View>
                  <View>
                    <EvilIcons name="heart" size={24} />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flex: 1,
                    marginHorizontal: 20,
                  }}
                >
                  <View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                      <Text style={{ color: "#7D7F88" }}>
                        {" "}
                        ⭐ 4.1 (66 reviews)
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                      <Ionicons name="bed-outline" size={20} color="#7D7F88" />
                      <Text style={{ color: "#7D7F88" }}>
                        {unit.bedrooms} room{" "}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                      <EvilIcons name="location" size={20} color="#7D7F88" />
                      {/* <Text numberOfLines={2}>{item.property.address}</Text> */}
                      <Text numberOfLines={2} style={{ color: "#7D7F88" }}>
                        {/* "dfsf" */}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                      <MaterialIcons
                        name="house-siding"
                        size={20}
                        color="#7D7F88"
                      />
                      <Text style={{ color: "#7D7F88" }}>
                        {unit.sizeSqFt} sqft
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "#D6D6D6",
                    width: "100%",
                    height: 1,
                    marginBottom: 20,
                    marginTop: 20,
                  }}
                />

                <View style={styles.ownerInfo}>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../../assets/avatars/female.png")}
                      style={styles.ownerAvatar}
                    />
                    <View>
                      <Text style={styles.ownerName}>
                        {item.property.contact.name}
                      </Text>
                      <Text style={styles.ownerRole}>
                        {item.property.contact.role}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      shadowColor: "#eeeff0",
                      shadowRadius: 5,
                      elevation: 10,
                      padding: 10,
                      shadowOpacity: 1,
                      backgroundColor: "white",
                      borderRadius: 10,
                      shadowOffset: {
                        x: 10,
                        y: 5,
                      },
                    }}
                  >
                    <Feather name="phone-call" size={20} color="#7D7F88" />
                  </View>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Home facilities</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 10,
                    }}
                  >
                    <MaterialIcons
                      name="severe-cold"
                      size={25}
                      color="#7D7F88"
                      style={{ marginRight: 10 }}
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "#7D7F88",
                      }}
                    >
                      {" "}
                      Air conditioner - {utilities?.airConditioner}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 10,
                    }}
                  >
                    <FontAwesome6
                      name="kitchen-set"
                      size={21}
                      color="#7D7F88"
                      style={{ marginRight: 10 }}
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "#7D7F88",
                      }}
                    >
                      {" "}
                      Kicthen -{" "}
                      {accessibility?.kitchen.type
                        ? accessibility.kitchen.type
                        : accessibility.kitchen}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 10,
                    }}
                  >
                    <FontAwesome6
                      name="car"
                      size={20}
                      style={{ marginRight: 10 }}
                      color="#7D7F88"
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "#7D7F88",
                      }}
                    >
                      {" "}
                      Parking -{" "}
                      {parking?.allottedParkingSpaces
                        ? parking?.allottedParkingSpaces
                        : "No Parking Space"}
                    </Text>
                  </View>
                  {/* <Text style={styles.facility}>
                    🌬 Air conditioner {utilities?.airConditioner}
                  </Text>
                  <Text style={styles.facility}>
                    🍽 Heating{utilities?.heating}
                  </Text>
                  <Text style={styles.facility}>
                    🚗 Free parking {parking?.allottedParkingSpaces}
                  </Text> */}
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>
                    Nearest public facilities
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      aligItems: "center",
                    }}
                  >
                    <View>
                      <View
                        style={{
                          backgroundColor: "white",
                          margin: 10,
                          borderRadius: 10,
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Feather
                            name="shopping-cart"
                            size={20}
                            color="#7D7F88"
                          />
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              marginLeft: 10,
                              color: "#7D7F88",
                            }}
                          >
                            Minimarket{" "}
                          </Text>
                        </View>
                        <Text style={styles.facility}>
                          {nearbyServices?.groceryShopping}
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: "white",
                          margin: 10,
                          borderRadius: 10,
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <View
                            style={{ flexDirection: "row", marginRight: 10 }}
                          >
                            <FontAwesome6
                              name="hospital"
                              size={20}
                              color="#7D7F88"
                            />
                          </View>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              color: "#7D7F88",
                            }}
                          >
                            Hospital
                          </Text>
                        </View>
                        <Text style={styles.facility}>
                          {nearbyServices?.hospital}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <View
                        style={{
                          backgroundColor: "white",
                          margin: 10,
                          borderRadius: 10,
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Feather
                            name="shopping-cart"
                            size={20}
                            color="#7D7F88"
                          />
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              marginLeft: 10,
                              color: "#7D7F88",
                            }}
                          >
                            Bus Stop{" "}
                          </Text>
                        </View>
                        <Text style={styles.facility}>
                          {nearbyServices?.busStop}
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: "white",
                          margin: 10,
                          borderRadius: 10,
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <View
                            style={{ flexDirection: "row", marginRight: 10 }}
                          >
                            <FontAwesome6
                              name="hospital"
                              size={20}
                              color="#7D7F88"
                            />
                          </View>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              color: "#7D7F88",
                            }}
                          >
                            Bus Stop
                          </Text>
                        </View>
                        <Text style={styles.facility}>
                          {nearbyServices?.busStop}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Property Comments</Text>
                  <Text style={styles.paragraph}>
                    {item.property.propertyComments}
                  </Text>

                  <Text style={styles.paragraph}>
                    This apartment equipped with Washing Machine, Electric
                    Stove, Microwave, Refrigerator, Cutlery.
                  </Text>
                </View>

                <TouchableOpacity style={styles.advanceButton}>
                  <Text style={styles.advanceText}>Advance Payment</Text>
                  <Text style={styles.advanceAmount}>500$/month</Text>
                </TouchableOpacity>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Testimonials</Text>
                  <View style={styles.testimonial}>
                    <Avatar.Image
                      size={44}
                      source={require("../../assets/avatars/male.png")}
                    />
                    <Text style={styles.testimonialName}>
                      Biggy Shahi ⭐⭐⭐⭐⭐
                    </Text>
                    <Text style={styles.paragraph}>
                      My wife and I had a dream of downsizing from our house in
                      Cape Elizabeth into a small condo closer to where we work
                      and play in Portland...
                    </Text>
                  </View>
                  <View style={styles.testimonial}>
                    <Avatar.Image
                      size={44}
                      source={require("../../assets/avatars/male.png")}
                    />
                    <Text style={styles.testimonialName}>
                      C. J. Upohrel ⭐⭐⭐⭐⭐
                    </Text>
                    <Text style={styles.paragraph}>
                      My wife & I have moved 6 times in the last 25 years.
                      Obviously, we’ve dealt with many realtors both on the
                      buying and selling side...
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
      </ScrollView>
      {/* Footer fixed at the bottom */}
      <View style={styles.footerFixed}>
        <View>
          <Text style={styles.footerPrice}>$526 / month</Text>
          <Text style={styles.footerEstimation}>Payment estimation</Text>
        </View>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 300 },
  videoButton: {
    borderWidth: 1,
    borderColor: "#5B4FE0",
    margin: 16,
    padding: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  videoButtonText: {
    color: "#5B4FE0",
    fontWeight: "500",
  },
  content: { paddingHorizontal: 16, marginBottom: 50 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F1D5B",
    marginBottom: 4,
  },
  subtitle: { color: "#555", marginBottom: 2 },
  location: { color: "#555", marginBottom: 12 },
  ownerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 16,
  },
  ownerAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  ownerName: { fontWeight: "bold", color: "#1F1D5B" },
  ownerRole: { fontSize: 12, color: "#888" },
  section: { marginBottom: 24 },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    marginBottom: 8,
    marginTop: 10,
    fontFamily: "Hind-Jalandhar-Bold",
  },
  facility: { fontSize: 14, marginVertical: 2, color: "#333" },
  map: { width: "100%", height: 150, borderRadius: 8, marginVertical: 12 },
  paragraph: { color: "#444", fontSize: 14, marginBottom: 8 },
  advanceButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#5B4FE0",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  advanceText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  advanceAmount: { color: "#fff", fontWeight: "600", fontSize: 16 },
  testimonial: { marginBottom: 12 },
  testimonialName: { fontWeight: "bold", marginBottom: 4, color: "#1F1D5B" },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "#eee",
    borderTopWidth: 1,
    paddingTop: 16,
    paddingBottom: 32,
  },
  footerPrice: { fontSize: 18, fontWeight: "bold", color: "#1F1D5B" },
  footerEstimation: { fontSize: 12, color: "#888" },
  contactButton: {
    backgroundColor: "#5B4FE0",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  contactText: { color: "#fff", fontWeight: "600" },
  footerFixed: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopColor: "#eee",
    borderTopWidth: 1,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
