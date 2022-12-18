import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import CustomHeader from "../../components/CustomHeader";

import { FONTS } from "../../theme";
import { getExamAttendanceList } from "../../utils";

function Item({ time, data }) {
  return (
    <>
      <Text className="mt-4">{time}</Text>

      {data.map((d, i) => {
        return (
          <View
            className="h-14 items-center mb-2 flex flex-row justify-between"
            key={i}
          >
            <View className="w-3/5 bg-gray-200 h-full flex text-center items-center justify-center">
              <Text numberOfLines={1} ellipsizeMode={"tail"}>
                {d.first_name} {d.last_name}
              </Text>
            </View>

            <View className="w-2/5 bg-gray-300 h-full flex text-center items-start pl-2 justify-center">
              <Text className="text-gray-400">{d.reg_no}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
}

export default function Attendance({ route, navigation }) {
  const [attendanceList, setAttendanceList] = useState<any[]>([]);

  const { courseId } = route.params;

  useEffect(() => {
    async function fetchData() {
      const res = await getExamAttendanceList(courseId);
      console.log(res);
      setAttendanceList(res.results);
    }

    fetchData();
  }, []);

  return (
    <View className="flex-1">
      <CustomHeader navigation={navigation} />
      <View className="flex-1 p-4">
        <Text className="text-2xl">Exam Attendance List</Text>
        <SafeAreaView className="flex-1">
          {attendanceList.map((attendance, index) => {
            console.log(`ATTENDANCE ${index}`, attendance);

            const attendaceData = attendance.attendance_list;
            // console.log(attendaceData);

            const time = attendance.time;
            return (
              <View key={index}>
                <Item
                  data={attendaceData}
                  time={time}
                  // first_name={attendaceData[0]?.first_name}
                  // last_name={attendaceData[0]?.last_name}
                  // reg_no={attendaceData[0]?.reg_no}
                />
              </View>
            );
          })}
        </SafeAreaView>
      </View>
    </View>
  );
}
