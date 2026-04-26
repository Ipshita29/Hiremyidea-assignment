import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

export default function LifestyleHeatmap() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("4 months");

  const options = ["1 month", "2 months", "3 months", "4 months"];

  const data = [
    {
      name: "Sleep",
      colors: ["#8773ea", "#8773ea", "#8773ea", "#8773ea", "#8773ea"],
    },
    {
      name: "Hydrate",
      colors: ["#dd8484", "#dd8484", "#dd8484"],
    },
    {
      name: "Caffeine",
      colors: ["#5e9580", "#5e9580", "#5e9580", "#5e9580"],
    },
    {
      name: "Exercise",
      colors: ["#f1afaf", "#f1afaf", "#f1afaf", "#f1afaf"],
    },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.box}>
        <View style={styles.topRow}>
          <Text style={styles.title}>Correlation Strength</Text>
          <View style={styles.dropdownWrapper}>
            <Pressable
              style={styles.dropdown}
              onPress={() => setOpen(!open)}
            >
              <Text style={styles.dropText}>{selected}</Text>
              <Feather name="chevron-down" size={14} color="#666" />
            </Pressable>
            {open && (
              <View style={styles.menu}>
                {options.map((opt, i) => (
                  <Pressable
                    key={i}
                    style={styles.option}
                    onPress={() => {
                      setSelected(opt);
                      setOpen(false);
                    }}
                  >
                    <Text style={styles.optionText}>{opt}</Text>
                  </Pressable>
                ))}
              </View>
            )}
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
    elevation: 4,

    overflow: "visible", 
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
    zIndex: 10, 
  },

  dropdownWrapper: {
    position: "relative",
    zIndex: 20, 
  },

  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },

  dropText: {
    fontSize: 12,
    color: "#666",
  },

  menu: {
    position: "absolute",
    top: 36,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 6,
    width: 110,
    zIndex: 50,    
    elevation: 10,  
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  option: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  optionText: {
    fontSize: 12,
    color: "#444",
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