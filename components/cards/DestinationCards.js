import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const InternationalMigrations = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>International Migrations</Text>
      <View style={styles.cardContainer}>
        <Card
          imageSource={{
            uri: "https://www.shutterstock.com/image-photo/woman-backpack-exploring-bali-indonesia-600nw-1924363112.jpg",
          }}
          title="Bali, Indonesia"
          subtitle="345 rented props"
        />
        <Card
          imageSource={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOu3pUiwfD-vbV0j7cwtR04_1uTgoz5LxCQ&s",
          }}
          title="Yogyakarta, Indonesia"
          subtitle="290 rented props"
        />
      </View>
      <View style={styles.hostSection}>
        <View>
          <Image
            style={{
              width: 100,
              height: 150,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            source={require("../../assets/images/active_landlord.png")}
          />
        </View>
        <View>
          <Text style={styles.hostTitle}>
            Want to host your {"\n"} own place?
          </Text>
          <Text></Text>
          <Text style={styles.hostSubtitle}>
            Earn passive income by
            {"\n"}renting or selling your
          </Text>
        </View>
      </View>
    </View>
  );
};

const Card = ({ imageSource, title, subtitle }) => (
  <View style={styles.card}>
    <Image source={imageSource} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubtitle}>{subtitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    width: "48%",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#888",
  },
  hostSection: {
    backgroundColor: "#6246EA",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  hostTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 40,
  },
  hostSubtitle: {
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 40,
    color: "white",
  },

  button: {
    padding: 10,
    backgroundColor: "#7e57c2",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default InternationalMigrations;
