import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomContainer from "../../components/CustomContainer";
import { ColorScheme, InputType } from "../../types";
import { FONTS } from "../../theme";

const SignIn = ({ navigation }) => {
  return (
    <CustomContainer>
      <Text style={FONTS.h1} className="mb-10 text-center">
        E-attendance app
      </Text>
      <View className="mb-5">
        <CustomInput
          placeholder="Email address"
          onChangeText={() => {}}
          type={InputType.email}
        />
      </View>

      <View className="mb-5">
        <CustomInput
          placeholder="Password"
          onChangeText={() => {}}
          type={InputType.password}
        />
      </View>
      <Text className="mb-5 text-right" style={FONTS.p}>
        Fogort Password?
      </Text>
      <CustomButton
        colorScheme={ColorScheme.secondary}
        label="Sign in"
        onPress={() => {
          navigation.navigate("DashboardScreen");
        }}
      />
    </CustomContainer>
  );
};

export default SignIn;
