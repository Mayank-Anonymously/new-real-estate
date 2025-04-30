import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

const VerifyOTPScreen = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleGetCode = () => {
    // Logic to send OTP
    console.log("Send OTP to:", email);
  };

  const handleVerify = () => {
    // Logic to verify OTP
    console.log("Verify OTP:", otp);
  };

  const handleNext = () => {
    // Proceed to next screen
    console.log("Next step");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      {/* Title */}
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subText}>VERIFY THROUGH EMAIL</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="yourmail@shrestha.com"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      {/* OTP Input with Get Code */}
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.otpInput]}
          placeholder="***"
          secureTextEntry
          onChangeText={setOtp}
          value={otp}
        />
        <TouchableOpacity style={styles.codeButton} onPress={handleGetCode}>
          <Text style={styles.buttonText}>Get code</Text>
        </TouchableOpacity>
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      {/* Back to Login */}
      <TouchableOpacity>
        <Text style={styles.backText}>back to login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerifyOTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  otpImage: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1D1145",
    marginBottom: 10,
    textAlign: "center",
  },
  subText: {
    textAlign: "center",
    color: "#888",
    letterSpacing: 1,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 14,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  otpInput: {
    flex: 1,
    marginRight: 10,
  },
  codeButton: {
    backgroundColor: "#3E5AEF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#3E5AEF",
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  backText: {
    color: "#000",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});
