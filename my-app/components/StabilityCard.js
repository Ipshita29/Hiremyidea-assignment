import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path, Circle, Line } from "react-native-svg";

export default function StabilityCard() {
  const GRAPH_LEFT = 40;
  const GRAPH_WIDTH = 250;
  const MONTHS = 4;
  const marchIndex = 2; 
  const step = GRAPH_WIDTH / MONTHS;
  const marchX = GRAPH_LEFT + step * marchIndex + step / 2;
  return (
    <View style={styles.card}>
      <Text style={styles.desc}>
        Based on your recent logs and symptom patterns.
      </Text>
      <Text style={styles.label}>Stability Score</Text>
      <Text style={styles.score}>78%</Text>
      <View style={styles.graph}>
        <Text style={[styles.y, { top: 12 }]}>32d</Text>
        <Text style={[styles.y, { top: 55 }]}>28d</Text>
        <Text style={[styles.y, { top: 98 }]}>24d</Text>

        <Svg width={320} height={140}>
          <Path
            d="
              M40 118
              L100 110
              C190 90, 240 70, 290 35
              L290 120
              L40 120
              Z
            "
            fill="#ECE7FF"
          />
          <Path
            d="
              M40 118
              L105 112
              C180 108, 240 85, 290 70
              L290 120
              L40 120
              Z
            "
            fill="#D2C7FF"
          />
          <Path
            d="
              M40 118
              L100 115
              C180 109, 240 100, 290 90
              L290 120
              L40 120
              Z
            "
            fill="#B3A3F5"
          />
          <Line
            x1={marchX}
            y1="45"
            x2={marchX}
            y2="120"
            stroke="#6f9c8d"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <Circle cx={marchX} cy="40" r="7" fill="#6f9c8d" />

        </Svg>
        <View style={[styles.tooltipWrap, { left: marchX - 36 }]}>
          <View style={styles.tooltip}>
            <Text style={styles.tooltipText}>
              Stability{"\n"}Improving
            </Text>
          </View>
          <View style={styles.pointer} />
        </View>
        <View style={styles.monthRow}>
          <Text style={styles.month}>Jan</Text>
          <Text style={styles.month}>Feb</Text>
          <Text style={styles.active}>Mar</Text>
          <Text style={styles.month}>Apr</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 20,
  },

  desc: {
    color: "#777",
    fontSize: 15,
    marginBottom: 12,
  },

  label: {
    fontSize: 16,
  },

  score: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 18,
  },

  graph: {
    height: 150,
    position: "relative",
  },

  y: {
    position: "absolute",
    left: 0,
    fontSize: 12,
    color: "#1b1b1b",
  },

  tooltipWrap: {
    position: "absolute",
    top: -15,
    alignItems: "center",
  },

  tooltip: {
    backgroundColor: "#000",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  tooltipText: {
    color: "#fff",
    fontSize: 11,
    textAlign: "center",
  },

  pointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#000",
  },

  monthRow: {
    position: "absolute",
    bottom: -2,
    left: 40,
    width: 250,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  month: {
    color: "#aaa",
    fontSize: 13,
  },

  active: {
    color: "#000",
    fontWeight: "600",
    fontSize: 13,
  },
});