import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import fontIsLoading from "./hooks/useLoadedAssets";
import Navigation from "./navigation/Index";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const isComplete = fontIsLoading();

  if (!isComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Navigation />
        </GestureHandlerRootView>
        <StatusBar backgroundColor={"#3b82f6"} style="dark" />
      </SafeAreaProvider>
    );
  }
}
