import React from "react";
import { View, TextInput, Pressable } from "react-native";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FONTS } from "../theme";
import { Feather } from "@expo/vector-icons";
import { ICustomInput } from "../types";

export default function CustomInput({
  placeholder,
  onChangeText,
  type,
}: ICustomInput) {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  function toggle(): void {
    setIsOpen(!isOpen);
  }

  return (
    <View className="h-16 bg-gray-200 rounded-md border border-gray-300">
      {type === "password" ? (
        <View className="flex-1 justify-between flex-row align-middle relative">
          <TextInput
            placeholder={placeholder}
            style={FONTS.p}
            onChangeText={onChangeText}
            className="flex-1 px-2"
            secureTextEntry={isOpen}
          />
          <Pressable className="absolute right-3 top-6" onPress={toggle}>
            <Feather
              name={isOpen ? "eye-off" : "eye"}
              size={24}
              color="#1f2937"
            />
          </Pressable>
        </View>
      ) : (
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          className="flex-1 px-2"
          style={FONTS.p}
          type={type}
        />
      )}
    </View>
  );
}
