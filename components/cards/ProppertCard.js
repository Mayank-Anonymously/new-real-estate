import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const PropertyCard = ({
  onPress,
  title,
  location,
  price,
  description,
  image,
}) => {
  const imagevar = image ? image : "";
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <Image
          source={{
            uri: Image.resolveAssetSource(
              require(`../../assets/images/property_image/brichwood.jpeg`)
            ).uri,
          }}
          style={styles.image}
        />
        <View style={styles.content}>
          <View style={styles.ratingRow}>
            <FontAwesome name="star" size={14} color="#FFA500" />
            <Text style={styles.ratingText}>4.8 (73)</Text>
          </View>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.location}>{location}</Text>

          <View style={styles.infoRow}>
            <View style={styles.iconText}>
              <Ionicons name="bed-outline" size={16} color="#888" />
              <Text style={styles.infoText}>{description}</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.price}>${price}</Text>
            <Text style={styles.perMonth}>/ month</Text>
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={20} color="#aaa" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    margin: 10,
    elevation: 3,
    width: width / 1.2,
    flexDirection: "row",
    height: height / 4,
    shadowColor: "whitesmoke",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      x: 1,
      y: 1,
    },
  },
  image: {
    width: 100,
    height: 180,
  },
  content: {
    padding: 14,
    marginTop: 10,
    width: 220,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#666",
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 4,
    color: "#000",
  },
  location: {
    fontSize: 12,
    color: "#999",
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  infoText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  perMonth: {
    fontSize: 12,
    color: "#666",
    marginLeft: 2,
  },
});
