import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ICustomInput } from "../types";
import { FONTS } from "../theme";

export default function CustomSearchBar({
  placeholder,
  onChangeText,
}: ICustomInput) {
  return (
    <View className="h-12 bg-gray-200 rounded-full px-5 border border-gray-300 my-5">
      <View className="flex-1 justify-between flex-row items-center">
        <Feather name={"search"} size={24} color="gray" />

        <TextInput
          placeholder={placeholder}
          style={FONTS.p}
          onChangeText={onChangeText}
          className="flex-1 px-2"
        />
      </View>
    </View>
  );
}
