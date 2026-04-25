import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path, Circle, Line } from "react-native-svg";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StabilityCard() {
  return (
    <SafeAreaView>
    <View style={styles.card}>
      <Text style={styles.desc}>
        Based on your recent logs and symptom patterns.
      </Text>
      <Text style={styles.label}>Stability Score</Text>
      <Text style={styles.score}>78%</Text>
      <View style={styles.graph}>
        <Text style={[styles.y, { top: 10 }]}>32d</Text>
        <Text style={[styles.y, { top: 45 }]}>28d</Text>
        <Text style={[styles.y, { top: 80 }]}>24d</Text>

        <Svg width={300} height={120}>
          <Path
            d="M40 90 Q120 70 280 30 L280 100 L40 100 Z"
            fill="#dcd2ff"
            opacity="0.5"
          />
          <Path
            d="M40 90 Q120 80 280 60 L280 100 L40 100 Z"
            fill="#b8a9f8"
            opacity="0.6"
          />
          <Path
            d="M40 90 Q120 85 280 75 L280 100 L40 100 Z"
            fill="#9f8df2"
            opacity="0.7"
          />
          <Line
            x1="170"
            y1="35"
            x2="170"
            y2="100"
            stroke="#6f9c8d"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <Circle cx="170" cy="30" r="6" fill="#6f9c8d" />

        </Svg>
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>
            Stability{"\n"}Improving
          </Text>
        </View>
        <View style={styles.monthRow}>
          <Text style={styles.month}>Jan</Text>
          <Text style={styles.month}>Feb</Text>
          <Text style={styles.active}>Mar</Text>
          <Text style={styles.month}>Apr</Text>
        </View>

      </View>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 18,
  },

  desc: {
    color: "#777",
    marginBottom: 10,
  },

  label: {
    fontSize: 16,
  },

  score: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 20,
  },

  graph: {
    height: 130,
    position: "relative",
  },

  y: {
    position: "absolute",
    left: 0,
    color: "#999",
    fontSize: 12,
  },

  tooltip: {
    position: "absolute",
    left: 140,
    top: -5,
    backgroundColor: "#000",
    padding: 6,
    borderRadius: 8,
  },

  tooltipText: {
    color: "#fff",
    fontSize: 10,
    textAlign: "center",
  },

  monthRow: {
    position: "absolute",
    bottom: -20,
    left: 40,
    width: 240,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  month: {
    color: "#aaa",
  },

  active: {
    color: "#000",
    fontWeight: "600",
  },
});