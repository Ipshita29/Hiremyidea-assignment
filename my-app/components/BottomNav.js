import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BottomNav() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.nav}>
        <View style={styles.item}>
          <View style={styles.homeIcon} />
          <Text style={styles.inactive}>Home</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.clockIcon} />
          <Text style={styles.inactive}>Track</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.chartIcon} />
          <Text style={styles.active}>Insights</Text>
        </View>
      </View>
      <View style={styles.plus}>
        <View style={styles.plusLineH} />
        <View style={styles.plusLineV} />
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
    alignItems: "center",
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    backgroundColor: "#f2f2f2",
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 40,

    shadowColor: "#000",
    shadowOpacity: 0.08,
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
  
  homeIcon: {
    width: 18,
    height: 18,
    backgroundColor: "#bbb",
    borderRadius: 4,
  },

  clockIcon: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#bbb",
  },

  chartIcon: {
    width: 18,
    height: 18,
    backgroundColor: "#000",
    borderRadius: 3,
  },
  plus: {
    position: "absolute",
    right: 30,
    bottom: 5, 
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },

  plusLineH: {
    position: "absolute",
    width: 20,
    height: 2,
    backgroundColor: "#888",
  },

  plusLineV: {
    position: "absolute",
    width: 2,
    height: 20,
    backgroundColor: "#888",
  },
});