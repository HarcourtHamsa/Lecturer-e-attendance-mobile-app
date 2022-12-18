import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomContainer from "../../components/CustomContainer";
import CustomHeader from "../../components/CustomHeader";
import { FontAwesome } from "@expo/vector-icons";
import { FONTS } from "../../theme";

export default function Settings({ navigation }) {
  return (
    <View className="flex-1">
      {/* <CustomHeader navigation={navigation} /> */}
      <CustomContainer>
        <View className="items-center">
          <FontAwesome name="user-circle" size={64} color="black" />
          <Text style={FONTS.p} className="mt-6">
            Harcourt Hamsa
          </Text>
          <Text style={FONTS.p} className="text-gray-500">
            hamsaharcourt@gmail.com
          </Text>
        </View>

        <TouchableOpacity className="px-6 py-3 w-auto  mt-10 mx-auto rounded-full bg-red-600" onPress={() => navigation.navigate("SignInScreen")}>
          <Text style={FONTS.p} className="text-white text-center w-fit">
            Sign out
          </Text>
        </TouchableOpacity>
      </CustomContainer>
    </View>
  );
}
