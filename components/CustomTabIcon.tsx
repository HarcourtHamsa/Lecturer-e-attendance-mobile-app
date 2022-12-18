import React from "react";
import { View, Text } from "react-native";
import Icon from "@expo/vector-icons/build/Ionicons";
const CustomTabIcon = ({ icon, label, focused }) => {
  return (
    <View className="flex justify-center items-center pt-5">
      <Icon name={icon} size={25} color={focused ? "black" : "#cbd5e1"} />
      <Text className={`${focused ? "text-black" : "text-gray-300"}`}>
        {label}
      </Text>
    </View>
  );
};

export default CustomTabIcon;
