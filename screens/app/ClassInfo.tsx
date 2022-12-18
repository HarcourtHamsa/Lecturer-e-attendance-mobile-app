import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Alert, ActivityIndicator } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { FONTS } from "../../theme";
import CustomButton from "../../components/CustomButton";
import { ColorScheme } from "../../types";
import * as Location from "expo-location";
import { endClassFnc, getStorageKey, startClassFnc } from "../../utils";

export default function ClassInfo({ route, navigation }) {
  const [classIsOnging, setClassIsOnging] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<unknown>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [classInfo, setClassInfo] = useState(null);
  const [storageKey, setStorageKey] = useState("");
  const { courseInfo } = route.params;

  useEffect(() => {
    async function getKey() {
      let key = await getStorageKey();
      setStorageKey(key);
    }

    getKey();
  }, []);

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

      let coordinates = await Location.getCurrentPositionAsync({});

      setLocation(coordinates);

      const res = await startClassFnc({
        courseId: courseInfo.id,
        latitude: coordinates.coords.latitude,
        longtitude: coordinates.coords.longitude,
        token: storageKey,
      });

      setClassInfo(res);
      setClassIsOnging(true);
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleEndClass() {
    setClassIsOnging(false);

    if (classInfo !== null) {
      try {
        setIsLoading(true);
        await endClassFnc({
          token: storageKey,
          classId: classInfo.id,
          courseId: classInfo.course,
        });
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
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
          className="mt-0 mb-10 leading-6 text-justify text-gray-500"
        >
          {courseInfo.description}
        </Text>

        <CustomButton
          colorScheme={classIsOnging ? ColorScheme.danger : ColorScheme.ghost}
          label={classIsOnging ? "End Class" : "Start Class"}
          onPress={classIsOnging ? handleEndClass : handleStartClass}
        />

        <View className="my-4">
          <CustomButton
            colorScheme={ColorScheme.ghost}
            label="Scan QR Code"
            onPress={() =>
              navigation.navigate("ScannerScreen", { courseId: courseInfo.id })
            }
          />
        </View>

        <View className="my-0">
          <CustomButton
            colorScheme={ColorScheme.ghost}
            label="View Lecture Attendance"
            onPress={() =>
              navigation.navigate("AttendanceScreen", {
                courseId: courseInfo.id,
              })
            }
          />
        </View>

        <Pressable
          className="px-4 py-6 flex flex-row items-center justify-center"
          onPress={() =>
            navigation.navigate("ExamAttendance", { courseId: courseInfo.id })
          }
        >
          <Text style={FONTS.p} className="text-center mr-2">
            View Exam Attendance
          </Text>
        </Pressable>

        {isLoading && (
          <View className="w-screen h-screen bg-black/0 absolute justify-center items-center">
            <View className="justify-center items-center w-fit p-5 rounded-lg bg-black ">
              <ActivityIndicator size={"small"} color="white" />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
