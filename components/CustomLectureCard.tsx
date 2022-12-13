import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { FONTS } from "../theme";
import { ICustomLectureCard } from "../types";

import stackIcon from "../assets/images/icons8-sheets-50.png";

export default function CustomLectureCard({
  title,
  level,
  onPress,
}: ICustomLectureCard) {
  return (
    <Pressable className="p-4 rounded-md my-2 border-2 border-gray-200" onPress={onPress}>
      <View>
        <Image source={stackIcon} />
      </View>
      <Text
        style={FONTS.h3}
        numberOfLines={1}
        ellipsizeMode={"tail"}
      >
        {title}
      </Text>
      <Text style={FONTS.p} className="text-gray-400">
        {level}
      </Text>
    </Pressable>
  );
}
