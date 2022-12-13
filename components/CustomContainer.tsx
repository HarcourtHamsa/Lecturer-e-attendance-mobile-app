import { View, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

export default function CustomContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollView
      className="flex-1 bg-red px-4"
      style={{ marginTop: StatusBar.currentHeight + 100 }}
    >
      <View className="flex-1">{children}</View>
    </ScrollView>
  );
}
