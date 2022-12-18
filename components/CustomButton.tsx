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
          ? "bg-red-400"
          : colorScheme === "ghost"
          ? "bg-gray-300"
          : null
      } px-6 py-4 rounded-full w-full items-center`}
    >
      <Text className="text-black text-lg" style={FONTS.p}>
        {label}
      </Text>
    </Pressable>
  );
}
