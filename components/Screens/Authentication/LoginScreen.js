import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // You can use this with Expo
import { useNavigation } from "@react-navigation/native";
import user from "../../../utils/user.json";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (user.email === email && user.password === password) {
      navigation.navigate("Root");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleBrand}>Nj Housing</Text>
      <Text style={styles.title}>Sign in</Text>

      <Text style={styles.label}>YOUR EMAIL</Text>
      <TextInput
        style={styles.input}
        placeholder="yourmail@shrestha.com"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>PASSWORD</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="••••••••"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={24}
            color="#999"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupPrompt}>Don’t have an account?</Text>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.signupText}>Create an Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  titleBrand: {
    fontSize: 24,
    color: "#1F1D5B",
    fontWeight: "500",
    marginBottom: 4,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#1F1D5B",
    marginBottom: 32,
  },
  label: {
    fontSize: 12,
    color: "#999",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
  },
  passwordContainer: {
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  inputPassword: {
    flex: 1,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#3E5BF5",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 24,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  signupPrompt: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    marginBottom: 12,
  },
  signupButton: {
    backgroundColor: "#242933",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
  },
});
