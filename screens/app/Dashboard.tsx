import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CustomContainer from "../../components/CustomContainer";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FONTS } from "../../theme";
import CustomSearchBar from "../../components/CustomSearchBar";
import CustomLectureCard from "../../components/CustomLectureCard";
import { fetchCourses, getStorageKey } from "../../utils";
import { ICourses } from "../../types";

export default function Dashboard({ navigation }) {
  const [courses, setCourses] = useState<ICourses[]>([]);

  useEffect(() => {
    async function getDataAsync() {
      const res = await fetchCourses();
      setCourses(res.results);
    }

    getDataAsync();
  }, []);
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
          <Octicons name="bell" size={30} color="#52525b" />
          <View className="w-4 h-4 bg-red-800 rounded-full absolute right-0  border-white z-10 flex items-center justify-center">
            <Text className="text-white">3</Text>
          </View>
        </View>
      </View>
      <CustomSearchBar placeholder="Search any course" />

      <View className="flex flex-row justify-between items-center">
      <Text className="my-2" style={FONTS.h2}>
       Your Courses
      </Text>

      <Text className="text-gray-500 text-lg">View all</Text>

      </View>

      {courses.map((v) => {
        return (
          <CustomLectureCard
            key={v.id}
            level={v.code}
            title={v.title}
            onPress={() =>
              navigation.navigate("ClassInfoScreen", { courseInfo: v })
            }
          />
        );
      })}
    </CustomContainer>
  );
}
