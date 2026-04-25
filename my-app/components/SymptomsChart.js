import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function SymptomsChart() {
  const size = 220;
  const stroke = 42;
  const radius = (size - stroke) / 2;
  const cx = size / 2;
  const data = [
    { value: 30, color: "#e6b4b4", label: "Mood" },
    { value: 31, color: "#a9a0cf", label: "Bloating" },
    { value: 21, color: "#d8a2a2", label: "Fatigue" },
    { value: 17, color: "#7f9c91", label: "Acne" },
  ];
  let start = 0;
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Symptom Trends</Text>
      <Text style={styles.sub}>Compared to last cycle</Text>
      <View style={styles.wrap}>
        <Svg width={size} height={size}>
          {data.map((item, i) => {
            const dash = (item.value / 100) * Math.PI * 2 * radius;
            const gap = Math.PI * 2 * radius - dash;
            const circle = (
              <Circle
                key={i}
                cx={cx}
                cy={cx}
                r={radius}
                stroke={item.color}
                strokeWidth={stroke}
                strokeDasharray={`${dash} ${gap}`}
                strokeDashoffset={-start}
                strokeLinecap="butt"
                fill="none"
              />
            );
            start += dash;
            return circle;
          })}
        </Svg>

        <View style={[styles.label, { top: 30, left: 35 }]}>
          <Text style={styles.pct}>30%</Text>
          <Text style={styles.lab}>Mood</Text>
        </View>

        <View style={[styles.label, { top: 40, right: 25 }]}>
          <Text style={styles.pct}>31%</Text>
          <Text style={styles.lab}>Bloating</Text>
        </View>

        <View style={[styles.label, { bottom: 20, right: 50 }]}>
          <Text style={styles.pct}>21%</Text>
          <Text style={styles.lab}>Fatigue</Text>
        </View>

        <View style={[styles.label, { bottom: 30, left: 25 }]}>
          <Text style={styles.pct}>17%</Text>
          <Text style={styles.lab}>Acne</Text>
        </View>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 18,
    marginTop: 20,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  
  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  sub: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },

  wrap: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  label: {
    position: "absolute",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  pct: {
    fontWeight: "700",
    fontSize: 14,
  },

  lab: {
    fontSize: 11,
    color: "#666",
  },
});
