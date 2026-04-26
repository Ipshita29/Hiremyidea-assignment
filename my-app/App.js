import React from "react";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import InsightsScreen from "./screens/InsightsScreen";
import BottomNav from "./components/BottomNav";

const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

function TrackScreen() {
  return (
    <SafeAreaView>
      <Text>Track Screen</Text>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          tabBar={(props) => <BottomNav {...props} />}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Track" component={TrackScreen} />
          <Tab.Screen name="Insights" component={InsightsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}