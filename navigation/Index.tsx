import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { icons, COLORS, SIZES } from "../theme";
// import { MdHome, MdSea } from "react-icons/md";

import SignIn from "../screens/auth/SignIn";

import Dashboard from "../screens/app/Dashboard";
import Settings from "../screens/app/Settings";
import Statistics from "../screens/app/Statistics";
import ClassInfo from "../screens/app/ClassInfo";

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

function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          width: "90%",
          position: "absolute",
          borderRadius: 50,
          bottom: "5%",
          left: "50%",
          transform: [{ translateX: -SIZES.width / 2.25 }],
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTabIcon
                icon={"home"}
                label="Home"
                focused={focused}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="StatisticsStack"
        component={Statistics}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTabIcon
                icon={"pie-chart"}
                label="Statistics"
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTabIcon
                icon={"settings"}
                label="Settings"
                focused={focused}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationTypeForReplace: "push" }}
    >
      <Stack.Screen name="SignInScreen" component={SignIn} />
      <Stack.Screen
        name="ClassInfoScreen"
        component={ClassInfo}
      />
      <Stack.Screen name="DashboardScreen" component={DashboardTabs} />
    </Stack.Navigator>
  );
}
