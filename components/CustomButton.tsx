import React from "react";
import { Pressable, Text } from "react-native";
import { FONTS } from "../theme";
import { ICustomButton } from "../types";

export default function CustomButton({
  label,
  onPress,
  colorScheme,
}: ICustomButton) {
  return (
    <Pressable
      onPress={onPress}
      className={`${
        colorScheme === "primary"
          ? "bg-green-500"
          : colorScheme === "secondary"
          ? "bg-blue-500"
          : colorScheme === "danger"
          ? "bg-red-700"
          : colorScheme === "ghost"
          ? "bg-gray-300"
          : null
      } px-6 py-4 rounded-2xl w-full items-center`}
    >
      <Text className="text-white text-lg" style={FONTS.p}>
        {label}
      </Text>
    </Pressable>
  );
}
