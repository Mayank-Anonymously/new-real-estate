import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Slider, Button, Picker, ScrollView } from "react-native";

const FilterScreen = ({ onApplyFilters }) => {
  // State to hold the filter criteria
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [bedrooms, setBedrooms] = useState(1);
  const [propertyType, setPropertyType] = useState("Apartment");

  const handleApplyFilters = () => {
    // Pass the selected filter values to the parent component or apply them
    onApplyFilters({ location, minPrice, maxPrice, bedrooms, propertyType });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Filter Properties</Text>

      {/* Location Filter */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Location"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      {/* Price Range Filter */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Price Range</Text>
        <View style={styles.sliderContainer}>
          <Text>Min: ${minPrice}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1000000}
            step={5000}
            value={minPrice}
            onValueChange={setMinPrice}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Text>Max: ${maxPrice}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1000000}
            step={5000}
            value={maxPrice}
            onValueChange={setMaxPrice}
          />
        </View>
      </View>

      {/* Number of Bedrooms Filter */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bedrooms</Text>
        <Picker
          selectedValue={bedrooms}
          style={styles.picker}
          onValueChange={(itemValue) => setBedrooms(itemValue)}
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <Picker.Item key={value} label={`${value} Bedroom${value > 1 ? "s" : ""}`} value={value} />
          ))}
        </Picker>
      </View>

      {/* Property Type Filter */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Property Type</Text>
        <Picker
          selectedValue={propertyType}
          style={styles.picker}
          onValueChange={(itemValue) => setPropertyType(itemValue)}
        >
          <Picker.Item label="Apartment" value="Apartment" />
          <Picker.Item label="House" value="House" />
          <Picker.Item label="Villa" value="Villa" />
          <Picker.Item label="Land" value="Land" />
        </Picker>
      </View>

      {/* Apply Filters Button */}
      <Button title="Apply Filters" onPress={handleApplyFilters} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  sliderContainer: {
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  picker: {
    height: 50,
    width: "100%",
  },
});

export default FilterScreen;
