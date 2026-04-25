import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

export default function BodyTrends() {
  const [tab, setTab] = useState("Monthly");

  // 🔥 SAME points used for line + dots
  const points = [
    { x: 20, y: 105 },  // Jan
    { x: 80, y: 75 },   // Feb
    { x: 140, y: 90 },  // Mar
    { x: 200, y: 30 },  // Apr (peak)
    { x: 260, y: 60 },  // May
  ];

  // Smooth curve using midpoints (simple + clean)
  const getPath = () => {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const midX = (points[i - 1].x + points[i].x) / 2;
      d += ` Q ${midX} ${points[i - 1].y}, ${points[i].x} ${points[i].y}`;
    }
    return d;
  };

  return (
    <View style={styles.card}>

      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Your weight</Text>
          <Text style={styles.sub}>in kg</Text>
        </View>

        {/* Toggle */}
        <View style={styles.toggle}>
          {["Monthly", "Weekly"].map((t) => (
            <TouchableOpacity
              key={t}
              onPress={() => setTab(t)}
              style={[styles.btn, tab === t && styles.activeBtn]}
            >
              <Text style={[styles.btnText, tab === t && styles.activeText]}>
                {t}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Graph */}
      <View style={styles.graph}>

        {/* grid */}
        <View style={[styles.line, { top: 10 }]} />
        <View style={[styles.line, { top: 50 }]} />
        <View style={[styles.line, { top: 90 }]} />

        {/* y labels */}
        <Text style={[styles.y, { top: 5 }]}>75</Text>
        <Text style={[styles.y, { top: 45 }]}>50</Text>
        <Text style={[styles.y, { top: 85 }]}>25</Text>

        <Svg width={300} height={120}>

          {/* Area */}
          <Path
            d={`${getPath()} L 300 120 L 20 120 Z`}
            fill="#e8a5a5"
            opacity="0.35"
          />

          {/* Line */}
          <Path
            d={getPath()}
            stroke="#e58b8b"
            strokeWidth="2"
            fill="none"
          />

          {/* Dots (now PERFECTLY on curve) */}
          {points.map((p, i) => (
            <Circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={i === 3 ? 6 : 5} // bigger for peak
              fill="#fff"
              stroke="#e58b8b"
              strokeWidth="2"
            />
          ))}

        </Svg>

        {/* months */}
        <View style={styles.monthRow}>
          <Text style={styles.month}>Jan</Text>
          <Text style={styles.month}>Feb</Text>
          <Text style={styles.month}>Mar</Text>
          <Text style={styles.month}>Apr</Text>
          <Text style={styles.month}>May</Text>
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

  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  sub: {
    fontSize: 12,
    color: "#888",
  },

  toggle: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 3,
  },

  btn: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
  },

  activeBtn: {
    backgroundColor: "#000",
  },

  btnText: {
    fontSize: 12,
    color: "#888",
  },

  activeText: {
    color: "#fff",
  },

  graph: {
    marginTop: 10,
    height: 120,
    position: "relative",
  },

  line: {
    position: "absolute",
    left: 30,
    right: 10,
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderColor: "#e5e5e5",
  },

  y: {
    position: "absolute",
    left: 0,
    fontSize: 12,
    color: "#aaa",
  },

  monthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -5,
    paddingHorizontal: 30,
  },

  month: {
    fontSize: 12,
    color: "#888",
  },
});