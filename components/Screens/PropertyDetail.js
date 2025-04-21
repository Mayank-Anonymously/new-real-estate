import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function PropertyDetailScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://via.placeholder.com/400x200.png?text=House+Image",
        }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.videoButton}>
        <Text style={styles.videoButtonText}>Watch Intro video</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>
          Entire Bromo mountain view Cabin in Surabaya
        </Text>
        <Text style={styles.subtitle}>
          ⭐ 4.1 (66 reviews) · 🛏 2 room · 📐 874 m²
        </Text>
        <Text style={styles.location}>📍Kapan, Jorpati</Text>

        <View style={styles.ownerInfo}>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }}
            style={styles.ownerAvatar}
          />
          <View>
            <Text style={styles.ownerName}>Bhuwan K.C</Text>
            <Text style={styles.ownerRole}>Property owner</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Home facilities</Text>
          <Text style={styles.facility}>🌬 Air conditioner</Text>
          <Text style={styles.facility}>🍽 Kitchen</Text>
          <Text style={styles.facility}>🚗 Free parking</Text>
          <Text style={styles.facility}>📶 Free WiFi</Text>
        </View>

        <Image
          source={{
            uri: "https://via.placeholder.com/300x150.png?text=Map+Location",
          }}
          style={styles.map}
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nearest public facilities</Text>
          <Text style={styles.facility}>🏪 Minimarket - 200m</Text>
          <Text style={styles.facility}>🏥 Hospital - 130m</Text>
          <Text style={styles.facility}>🥣 Public canteen - 400m</Text>
          <Text style={styles.facility}>🚉 Train station - 500m</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About location’s neighborhood</Text>
          <Text style={styles.paragraph}>
            This cabin comes with Smart Home System and beautiful viking style.
            You can see sunrise in the morning with City View from full Glass
            Window.
          </Text>
          <Text style={styles.paragraph}>
            This unit is surrounded by business district of West Surabaya that
            offers you the city life as well as wide range of culinary.
          </Text>
          <Text style={styles.paragraph}>
            This apartment equipped with Washing Machine, Electric Stove,
            Microwave, Refrigerator, Cutlery.
          </Text>
        </View>

        <TouchableOpacity style={styles.advanceButton}>
          <Text style={styles.advanceText}>Advance Payment</Text>
          <Text style={styles.advanceAmount}>500$/month</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Testimonials</Text>
          <View style={styles.testimonial}>
            <Text style={styles.testimonialName}>Biggy Shahi ⭐⭐⭐⭐⭐</Text>
            <Text style={styles.paragraph}>
              My wife and I had a dream of downsizing from our house in Cape
              Elizabeth into a small condo closer to where we work and play in
              Portland...
            </Text>
          </View>
          <View style={styles.testimonial}>
            <Text style={styles.testimonialName}>C. J. Upohrel ⭐⭐⭐⭐⭐</Text>
            <Text style={styles.paragraph}>
              My wife & I have moved 6 times in the last 25 years. Obviously,
              we’ve dealt with many realtors both on the buying and selling
              side...
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View>
            <Text style={styles.footerPrice}>$526 / month</Text>
            <Text style={styles.footerEstimation}>Payment estimation</Text>
          </View>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  ownerInfo: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
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
});
