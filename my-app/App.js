import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import InsightsScreen from "./screens/InsightsScreen"; 

export default function App() {
  return (
    <SafeAreaProvider>
      <InsightsScreen />
    </SafeAreaProvider>
  );
}