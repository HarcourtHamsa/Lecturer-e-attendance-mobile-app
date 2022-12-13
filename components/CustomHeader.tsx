import React from "react";
import { View, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FONTS } from "../theme";

export default function CustomHeader({ navigation }) {
  return (
    <View className="h-24 flex items-start justify-end p-4">
      <Pressable
        className="flex-row items-center"
        onPress={() => navigation.goBack()}
      >
        <Entypo name="chevron-left" size={34} color="#2563eb" />

        <Text style={FONTS.h3} className="text-blue-600">
          Back
        </Text>
      </Pressable>
    </View>
  );
}
