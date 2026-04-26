import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons"; 

const { width } = Dimensions.get("window");
export default function BottomNav() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.nav}>
        <View style={styles.item}>
          <Feather name="home" size={20} color="#6a6767" />
          <Text style={styles.inactive}>Home</Text>
        </View>

        <View style={styles.item}>
          <Feather name="clock" size={20} color="#6a6767" />
          <Text style={styles.inactive}>Track</Text>
        </View>

        <View style={styles.item}>
          <Feather name="bar-chart-2" size={20} color="#6a6767" />
          <Text style={styles.active}>Insights</Text>
        </View>
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