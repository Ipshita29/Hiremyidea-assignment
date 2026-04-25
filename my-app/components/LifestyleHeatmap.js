import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LifestyleHeatmap() {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Lifestyle Impact</Text>
      <View style={styles.box}>
        <View style={styles.topRow}>
          <Text style={styles.title}>Correlation Strength</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropText}>4 months</Text>
          </View>
        </View>

        {/* Rows */}
        {data.map((row, i) => {
            let tiles = [];
            for (let j = 0; j < 8; j++) {
                tiles.push(
                <View
                    key={j}
                    style={[
                    styles.tile,
                    {backgroundColor: row.colors[j]? row.colors[j]: "#e6e6e6",},
                    ]}
                />
                );
            }
            return (
                <View key={i} style={styles.row}>
                <Text style={styles.label}>{row.name}</Text>
                <View style={styles.tiles}>{tiles}</View>
                </View>
            );
            })}
      </View>
    </View>
  );
}
const data = [
  {
    name: "Sleep",
    colors: ["#c9c3e6", "#bdb5df", "#b0a7d8", "#a49bd1", "#9a92cc"],
  },
  {
    name: "Hydrate",
    colors: ["#e9a7a7", "#e39b9b", "#dd8f8f"],
  },
  {
    name: "Caffeine",
    colors: ["#7f9c91", "#738f85", "#6a847a", "#617a71"],
  },
  {
    name: "Exercise",
    colors: ["#e3b3b3", "#dbabab", "#d3a3a3", "#dd8f8f"],
  },
];
const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },

  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  box: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  title: {
    fontSize: 14,
    fontWeight: "500",
  },

  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  dropText: {
    fontSize: 12,
    color: "#666",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  label: {
    width: 70,
    fontSize: 12,
    color: "#666",
  },

  tiles: {
    flexDirection: "row",
    gap: 6,
  },

  tile: {
    width: 26,  
    height: 26,
    borderRadius: 6,
  },
});