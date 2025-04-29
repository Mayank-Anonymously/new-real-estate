import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // You can use this with Expo
import { useNavigation } from "@react-navigation/native";
import user from "../../../utils/user.json";
import { loginApi } from "../../../utils/apicalls/loginApi";
import { Button } from "react-native-paper";
export default function LoginScreen() {
  const { width, height } = Dimensions.get("screen");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const [error, setErros] = useState("");
  const handleLogin = () => {
  
      loginApi(email , password ,navigation , setErros)
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/background/splash_background.png")}
        resizeMode="cover" // Or "contain", depending on desired fit
      />
      <View style={{ padding: 25, marginTop: -150 }}>
        <Text style={styles.titleBrand}>Nj Housing</Text>
        <Text style={styles.title}>Sign in</Text>

        <Text style={styles.label}>YOUR EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
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
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="#999"
            />
          </TouchableOpacity>
        </View>
        {error && (
          <View
            style={{
              backgroundColor: "#ffd1d1",
              borderWidth: 1,
              borderColor: "#ff0000",
              padding: 20,
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "#FF5D5D" }}>{error}</Text>
          </View>
        )}

        <Button
          onPress={handleLogin}
          style={styles.loginButton}
          textColor="white"
        >
          Login
        </Button>
        <Text style={styles.signupPrompt}>Don’t have an account?</Text>
        <Button
          style={styles.signupButton}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.signupText}>Create an Account</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: 500,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    fontFamily: "Hind-Jalandhar",
  },
  label: {
    fontSize: 12,
    color: "#999",
    marginBottom: 6,
    fontFamily: "Hind-Jalandhar",
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
    borderRadius: 8,
    alignItems: "center",
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
  },
});
