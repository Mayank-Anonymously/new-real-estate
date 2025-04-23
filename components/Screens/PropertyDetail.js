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
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import property_details from "../../utils/properties_detail.json";
import { Avatar } from "react-native-paper";

export default function PropertyDetailScreen() {
  const route = useRoute();
  const { title, image, rent } = route.params;

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(property_details);
  }, []);

  console.log("title:", title);
  console.log("title:", rent);

  return (
    <>
      <ScrollView style={styles.container}>
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

            return (
              <View style={styles.content}>
                <Text style={styles.title}>{item.property.name} </Text>
                <Text style={styles.subtitle}>
                  ⭐ 4.1 (66 reviews) · 🛏 {unit.bedrooms} room · 📐{" "}
                  {unit.sizeSqFt} sqft
                </Text>
                <Text style={styles.location}>📍{item.property.address}</Text>

                <View style={styles.ownerInfo}>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../../assets/avatars/female.png")}
                      style={styles.ownerAvatar}
                    />
                    <View>
                      <Text style={styles.ownerName}>Bhuwan K.C</Text>
                      <Text style={styles.ownerRole}>Property owner</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      shadowColor: "red",
                      shadowRadius: 4,
                      elevation: 10,
                      padding: 10,
                      shadowOpacity: 5,
                    }}
                  >
                    <Feather name="phone-call" size={20} />
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "#D6D6D6",
                    width: "100%",
                    height: 1,
                    marginBottom: 50,
                  }}
                />

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Home facilities</Text>
                  <Text style={styles.facility}>
                    🌬 Air conditioner {utilities?.airConditioner}
                  </Text>
                  <Text style={styles.facility}>
                    🍽 Heating{utilities?.heating}
                  </Text>
                  <Text style={styles.facility}>
                    🚗 Free parking {parking?.allottedParkingSpaces}
                  </Text>
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
                          padding: 20,
                          backgroundColor: "white",
                          elevation: 2,
                          shadowColor: "grey",
                          shadowRadius: 10,
                          margin: 10,
                          borderRadius: 10,
                        }}
                      >
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                          🏪 Minimarket -
                        </Text>
                        <Text style={styles.facility}>
                          {nearbyServices?.groceryShopping}
                        </Text>
                      </View>
                      <View
                        style={{
                          padding: 20,
                          backgroundColor: "white",
                          elevation: 2,
                          shadowColor: "grey",
                          shadowRadius: 10,
                          margin: 10,
                          borderRadius: 10,
                        }}
                      >
                        <View>
                          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            🏥 Hospital
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
                          padding: 20,
                          backgroundColor: "white",
                          elevation: 2,
                          shadowColor: "grey",
                          shadowRadius: 10,
                          margin: 10,
                          borderRadius: 10,
                        }}
                      >
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                          🚉 Bus station
                        </Text>
                        <Text style={styles.facility}>
                          {nearbyServices?.busStop}
                        </Text>
                      </View>
                      <View
                        style={{
                          padding: 20,
                          backgroundColor: "white",
                          elevation: 2,
                          shadowColor: "grey",
                          shadowRadius: 10,
                          margin: 10,
                          borderRadius: 10,
                        }}
                      >
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                          🚉 Bus station
                        </Text>
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

                <View style={styles.footer}>
                  <View>
                    <Text style={styles.footerPrice}>$526 / month</Text>
                    <Text style={styles.footerEstimation}>
                      Payment estimation
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactText}>Contact</Text>
                  </TouchableOpacity>
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
  image: { width: "100%", height: 220 },
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
  content: { paddingHorizontal: 16 },
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
    fontSize: 16,
    color: "#1F1D5B",
    marginBottom: 8,
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
