import React, { useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomContainer from "../../components/CustomContainer";
import { ColorScheme, InputType } from "../../types";
import { FONTS, SIZES } from "../../theme";
import { login } from "../../utils";
import { StatusBar } from "expo-status-bar";

const SignIn = ({ navigation }) => {
  let [isLoading, setIsLoading] = useState<boolean>(false);
  let [username, setUsername] = useState<string>("");
  let [password, setPassword] = useState<string>("");

  async function handleLogin() {
    try {
      setIsLoading(true);
      const response = await login({ username, password });

      if (!response?.key) {
        Alert.alert("Invalid credentials");
        return;
      }
      navigation.navigate("Dashboard");
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleUsernameChange(value) {
    setUsername(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
  }

  return (
    <View className="flex-1 mt-12">
      <KeyboardAvoidingView
        className="px-4 py-8 flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text className="text-3xl mb-10">Sign In</Text>
        <View className="mb-5">
          <CustomInput
            placeholder="Username"
            onChangeText={(text) => handleUsernameChange(text)}
            type={InputType.email}
          />
        </View>

        <View className="mb-5">
          <CustomInput
            placeholder="Password"
            onChangeText={(text) => handlePasswordChange(text)}
            type={InputType.password}
          />
        </View>
        <CustomButton
          colorScheme={ColorScheme.ghost}
          label={isLoading ? "Loading..." : "Sign in"}
          onPress={handleLogin}
        />

        <Text className="text-center text-lg mt-4">Don't have an account ? Signup</Text>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;
