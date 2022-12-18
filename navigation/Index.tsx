import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { isIphoneX } from "react-native-iphone-x-helper";

// import { icons, COLORS, SIZES } from "../theme";
// import { MdHome, MdSea } from "react-icons/md";

import SignIn from "../screens/auth/SignIn";

import Dashboard from "../screens/app/Dashboard";
import Settings from "../screens/app/Settings";
import Statistics from "../screens/app/Statistics";
import ClassInfo from "../screens/app/ClassInfo";
import Scanner from "../screens/app/Scanner";
import Attendance from "../screens/app/Attendance";
import ExamAttendance from "../screens/app/ExamAttendance";

import CustomTabIcon from "../components/CustomTabIcon";
import { SIZES } from "../theme";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationTypeForReplace: "push" }}
    >
      <Stack.Screen name="SignInScreen" component={SignIn} />
      <Stack.Screen name="ScannerScreen" component={Scanner} />
      <Stack.Screen name="AttendanceScreen" component={Attendance} />
      <Stack.Screen name="ExamAttendance" component={ExamAttendance} />
      <Stack.Screen name="ClassInfoScreen" component={ClassInfo} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="StatisticsStack" component={Statistics} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
