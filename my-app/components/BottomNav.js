import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

export default function BottomNav({ state, navigation }) {
  if (!state) return null;
  return (
    <View style={styles.wrapper}>
      <View style={styles.nav}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          let iconName;
          if (route.name === "Home") iconName = "home";
          if (route.name === "Track") iconName = "clock";
          if (route.name === "Insights") iconName = "bar-chart-2";
          return (
            <Pressable
              key={index}
              onPress={() => navigation.navigate(route.name)}
              style={styles.item}
            >
              <Feather
                name={iconName}
                size={20}
                color={isFocused ? "#000" : "#6a6767"}
              />
              <Text style={isFocused ? styles.active : styles.inactive}>
                {route.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <View style={styles.plus}>
        <View style={styles.plusH} />
        <View style={styles.plusV} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
    height: 80,
  },

  nav: {
    position: "absolute",
    left: width * 0.05,
    width: width * 0.73,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5fcf8",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  item: {
    alignItems: "center",
  },

  inactive: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },

  active: {
    fontSize: 12,
    color: "#000",
    marginTop: 4,
    fontWeight: "600",
  },

  plus: {
    position: "absolute",
    right: 18,
    bottom: 16,
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },

  plusH: {
    position: "absolute",
    width: 22,
    height: 2,
    backgroundColor: "#777",
  },

  plusV: {
    position: "absolute",
    width: 2,
    height: 22,
    backgroundColor: "#777",
  },
});