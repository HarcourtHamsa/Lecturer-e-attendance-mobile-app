import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import fontIsLoading from "./hooks/useLoadedAssets";
import Navigation from "./navigation/Index";

export default function App() {
  const isComplete = fontIsLoading();

  if (!isComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar backgroundColor={"#3b82f6"} style="dark" />
      </SafeAreaProvider>
    );
  }
}
