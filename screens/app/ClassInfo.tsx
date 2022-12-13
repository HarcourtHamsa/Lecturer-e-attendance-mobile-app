import { View, Text, Pressable } from "react-native";
import React from "react";
import CustomContainer from "../../components/CustomContainer";
import CustomHeader from "../../components/CustomHeader";
import { FONTS } from "../../theme";
import CustomButton from "../../components/CustomButton";
import { ColorScheme } from "../../types";
import { AntDesign } from "@expo/vector-icons";

export default function ClassInfo({ route, navigation }) {
  const { courseInfo } = route.params;
  console.log(courseInfo);

  return (
    <View className="flex-1">
      <CustomHeader navigation={navigation} />
      <View className="px-4 py-8">
        <Text style={FONTS.h1} numberOfLines={1} ellipsizeMode="tail">
          {courseInfo.title}
        </Text>
        <Text
          style={FONTS.p}
          className="mt-4 mb-10 leading-6 text-justify text-gray-500"
        >
          {courseInfo.description}
        </Text>

        <CustomButton colorScheme={ColorScheme.secondary} label="Start Class" />

        <View className="my-4">
          <CustomButton
            colorScheme={ColorScheme.secondary}
            label="Scan QR Code"
          />
        </View>

        <Pressable className="px-4 py-6 flex flex-row items-center justify-center">
          <Text style={FONTS.p} className="text-center mr-2">
            View Attendance
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
