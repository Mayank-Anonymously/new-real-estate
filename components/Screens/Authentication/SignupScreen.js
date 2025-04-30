import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import axios from "axios";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [confirmPasscode, setConfirmPasscode] = useState("");
  const [userType, setUserType] = useState("");
  const navigation = useNavigation();
  const handleSubmit = async () => {
    console.log("Hit");
    if (passcode !== confirmPasscode) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password: passcode,
    };
    console.log(userData);
    try {
      // Make a POST request to the backend API
      const response = await axios.post(
        "http://192.168.1.10:9292/auth/register",
        userData
      );
      // On success, navigate or show success message
      Alert.alert("Success", response.data.message);
      navigation.navigate("VerifyOtp"); // Go back to login or wherever you need
    } catch (error) {
      // Handle error if API call fails
      if (error.response) {
        // The request was made and the server responded with a status other than 2xx
        Alert.alert("Error", error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        Alert.alert("Error", "Network error. Please try again later.");
      } else {
        // Something happened in setting up the request
        Alert.alert("Error", "An error occurred. Please try again.");
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>we need something more</Text>

        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 8 }]}
            placeholder="Firstname"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Lastname"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="yourmail@shrestha.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Passcode"
          secureTextEntry
          value={passcode}
          onChangeText={setPasscode}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm passcode"
          secureTextEntry
          value={confirmPasscode}
          onChangeText={setConfirmPasscode}
        />

        <Text style={styles.label}>TYPE OF USER</Text>
        <TextInput
          style={styles.input}
          placeholder="Choose your user-type"
          value={userType}
          onChangeText={setUserType}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backToLogin}>back to login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: 24,
    justifyContent: "center",
  },
  titleTop: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F1D5B",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitleTop: {
    fontSize: 14,
    color: "#1F1D5B",
    textAlign: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1F1D5B",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#1F1D5B",
    textAlign: "center",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: "#999",
    marginBottom: 6,
    marginTop: 8,
  },
  submitButton: {
    backgroundColor: "#3E5BF5",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  backToLogin: {
    fontSize: 14,
    color: "#1F1D5B",
    textAlign: "center",
  },
});
