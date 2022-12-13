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

        <TouchableOpacity className="p-4 mt-10 rounded-xl">
          <Text style={FONTS.p} className="text-red-800 text-center">
            Sign out
          </Text>
        </TouchableOpacity>
      </CustomContainer>
    </View>
  );
}
