import React, { useState } from "react";
import { View, Text, Pressable, Alert, ActivityIndicator } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { FONTS } from "../../theme";
import CustomButton from "../../components/CustomButton";
import { ColorScheme } from "../../types";
import * as Location from "expo-location";

export default function ClassInfo({ route, navigation }) {
  const [classIsOnging, setClassIsOnging] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<unknown>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { courseInfo } = route.params;

  async function handleStartClass() {
    try {
      // show loading indicator
      setIsLoading(true);

      let { status } = await Location.requestForegroundPermissionsAsync();

      // checks for the status of the permission
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setClassIsOnging(true);
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleEndClass() {
    setClassIsOnging(false);
  }

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

        <CustomButton
          colorScheme={
            classIsOnging ? ColorScheme.danger : ColorScheme.secondary
          }
          label={classIsOnging ? "End Class" : "Start Class"}
          onPress={classIsOnging ? handleEndClass : handleStartClass}
        />

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

        {isLoading && (
          <View className="w-screen h-screen bg-black/40 absolute justify-center items-center">
            <View className="justify-center items-center w-32">
              <ActivityIndicator size={"large"} color="white" />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
