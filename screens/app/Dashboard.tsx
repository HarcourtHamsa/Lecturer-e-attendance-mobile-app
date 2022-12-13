import React from "react";
import { View, Text } from "react-native";
import CustomContainer from "../../components/CustomContainer";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FONTS } from "../../theme";
import CustomSearchBar from "../../components/CustomSearchBar";
import CustomLectureCard from "../../components/CustomLectureCard";

const classDetails = [
  {
    id: 1,
    description:
      "What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.",
    title: "Engineering Mathematics",
    level: "COE 500 Level",
  },
];

export default function Dashboard({ navigation }) {
  return (
    <CustomContainer>
      <View className="flex-row justify-between items-center">
        {/* column 1 */}
        <View>
          <Text style={FONTS.h1}>Home</Text>
        </View>

        {/* column 2 */}
        <View>
          {/* notification bell */}
          <Octicons name="bell-fill" size={30} color="#52525b" />
          <View className="w-4 h-4 bg-red-800 rounded-full absolute right-0  border-white z-10 flex items-center justify-center">
            <Text className="text-white">3</Text>
          </View>
        </View>
      </View>
      <CustomSearchBar placeholder="Search any course" />
      {/* <Text className="my-2" style={FONTS.h2}>
        Your Classes
      </Text> */}

      {classDetails.map((v) => {
        return (
          <CustomLectureCard
            key={v.id}
            level="COE 500 Level"
            title="Engineering Mathematics"
            onPress={() =>
              navigation.navigate("ClassInfoScreen", { courseInfo: v })
            }
          />
        );
      })}
      {/* <CustomLectureCard level="COE 300 Level" title="Applied Electronics" />
      <CustomLectureCard
        level="COE 500 Level"
        title="Antenna Design and Management"
      />
      <CustomLectureCard
        level="COE 500 Level"
        title="Reliability and Maintainability of Communication Systems"
      /> */}
    </CustomContainer>
  );
}
