import React from "react";
import { View, Text, Image } from "react-native";
import { FONTS } from "../theme";
// import SkeletonContent from "react-native-skeleton-content";

export default function CustomIdentificationCard({ data }) {
  return (
    <>
      <View className="h-32 w-4/6  mx-auto bg-zinc-500/5 mt-10 rounded-2xl"></View>
      <View className="h-32 w-5/6  mx-auto bg-zinc-500/10 -mt-28 rounded-2xl"></View>
      <View className="h-48 w-full  bg-zinc-300 my-6 rounded-2xl z-40 -mt-28 flex justify-center items-center">
        <View className="flex flex-row gap-4 justify-around items-center flex-1">
          {/* profile photo */}
          <View className="bg-green-300 w-40 h-40 rounded-2xl">
            <Image
              source={{ uri: data?.profile_pic }}
              className="flex-1 overflow-hidden rounded"
            />
          </View>

          {/* details */}
          <View>
            <View className="mb-2">
              <Text style={FONTS.p} className="">
                Given Name
              </Text>
              <Text className="text-gray-500 text-sm">
                {data?.first_name} {data?.last_name}
              </Text>
            </View>
            <View className="mb-2">
              <Text style={FONTS.p} className="">
                Reg number{" "}
              </Text>
              <Text className="text-gray-500 text-sm">{data?.reg_no}</Text>
            </View>
            <View>
              <Text style={FONTS.p} className="">
                Department
              </Text>
              <Text className="text-gray-500 text-sm">{data?.department}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
