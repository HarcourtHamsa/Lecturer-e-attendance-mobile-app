import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { BarCodeScanner } from "expo-barcode-scanner";
import CustomHeader from "../../components/CustomHeader";
import CustomIdentificationCard from "../../components/CustomIdentificationCard";
import CustomButton from "../../components/CustomButton";
import { ColorScheme } from "../../types";
import {
  getStorageKey,
  getUserFromRegNumber,
  markExamAttendance,
} from "../../utils";

export default function Scanner({ route, navigation }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState({});
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const [hasPermission, setHasPermission] = useState<unknown>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [regNumber, setRegNumber] = useState<string>("");
  const { courseId } = route.params;

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);

    try {
      const res = await getUserFromRegNumber({ id: data });
      setRegNumber(data);
      setUserData(res);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {}, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function handleConfirm() {
    try {
      setIsLoading(true);
      const token = await getStorageKey();
      const res = await markExamAttendance({
        courseId: courseId,
        reg_no: regNumber,
        token,
      });

      console.log("res", res);

      const isSuccessful = Boolean(res?.attendance_list);

      if (isSuccessful) {
        Alert.alert("Successful");
      } else {
        Alert.alert("Oops! an error occured");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View className="flex-1">
      {!scanned && <CustomHeader navigation={navigation} />}

      <View className="flex-1">
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      {scanned && (
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
        >
          <View className="flex-1 px-4 py-8">
            <CustomIdentificationCard data={userData} />

            <View className="flex flex-row justify-around items-center flex-1">
              <View>
                <CustomButton
                  colorScheme={ColorScheme.ghost}
                  label={isLoading ? "Loading..." : "Confirm"}
                  onPress={() => handleConfirm()}
                />
              </View>
              <View>
                <CustomButton
                  colorScheme={ColorScheme.ghost}
                  label="Cancel"
                  onPress={() => {
                    setScanned(false);
                    setUserData({});
                  }}
                />
              </View>
            </View>
          </View>
        </BottomSheet>
      )}
    </View>
  );
}
