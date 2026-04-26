import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LifestyleHeatmap() {
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

  return (
    <View style={styles.card}>
      <View style={styles.box}>
        <View style={styles.topRow}>
          <Text style={styles.title}>Correlation Strength</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropText}>4 months</Text>
          </View>
        </View>
        {data.map((row, i) => {
          let tiles = [];
          for (let j = 0; j < 8; j++) {
            const color = row.colors[j];
            tiles.push(
              <LinearGradient
                key={j}
                colors={
                  color
                    ? [color, "#ffffff"] 
                    : ["#e6e6e6", "#f2f2f2"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.tile}
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

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },

  box: {
    backgroundColor: "rgba(255,255,255,0.9)", 
    padding: 16,
    borderRadius: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  dropdown: {
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
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.05)",
  },
});