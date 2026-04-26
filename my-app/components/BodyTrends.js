import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from "react-native-svg";

export default function BodyTrends() {
  const [tab, setTab] = useState("Monthly");
  const data = {
    Monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      path: `
        M20 95
        C60 85, 80 70, 110 75
        S160 100, 180 80
        S220 30, 240 35
        S280 70, 300 60
      `,
      area: `
        M20 95
        C60 85, 80 70, 110 75
        S160 100, 180 80
        S220 30, 240 35
        S280 70, 300 60
        L300 120
        L20 120
        Z
      `,
      points: [
        { x: 40, y: 90 },
        { x: 110, y: 75 },
        { x: 170, y: 90 },
        { x: 230, y: 40 },
        { x: 290, y: 65 },
      ],
    },

    Weekly: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      path: `
        M20 80
        C60 60, 80 100, 110 70
        S160 40, 180 60
        S220 90, 240 70
        S280 50, 300 65
      `,
      area: `
        M20 80
        C60 60, 80 100, 110 70
        S160 40, 180 60
        S220 90, 240 70
        S280 50, 300 65
        L300 120
        L20 120
        Z
      `,
      points: [
        { x: 40, y: 80 },
        { x: 110, y: 70 },
        { x: 170, y: 60 },
        { x: 230, y: 75 },
        { x: 290, y: 65 },
      ],
    },
  };

  const current = data[tab];

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Your weight</Text>
          <Text style={styles.sub}>in kg</Text>
        </View>

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

      <View style={styles.graph}>
        <View style={[styles.line, { top: 15 }]} />
        <View style={[styles.line, { top: 60 }]} />
        <View style={[styles.line, { top: 100 }]} />

        <Text style={[styles.y, { top: 10 }]}>75</Text>
        <Text style={[styles.y, { top: 55 }]}>50</Text>
        <Text style={[styles.y, { top: 95 }]}>25</Text>

        <Svg width={320} height={140}>
          <Defs>
            <LinearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor="#f67a7a" stopOpacity="0.5" />
              <Stop offset="100%" stopColor="#f99a9a" stopOpacity="0.05" />
            </LinearGradient>
          </Defs>
          <Path d={current.area} fill="url(#areaGrad)" />
          <Path
            d={current.path}
            stroke="#ff5a5a"
            strokeWidth="2.5"
            fill="none"
          />
          {current.points.map((p, i) => (
            <React.Fragment key={i}>
              <Circle cx={p.x} cy={p.y} r="7" fill="#f5b9b9" />
              <Circle cx={p.x} cy={p.y} r="5" fill="#fff" />
              <Circle cx={p.x} cy={p.y} r="2.5" fill="#f15959" />
            </React.Fragment>
          ))}
        </Svg>
        <View style={styles.monthRow}>
          {current.labels.map((label, i) => (
            <Text key={i} style={styles.month}>
              {label}
            </Text>
          ))}
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
    borderRadius: 10,
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
    height: 135,
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
    marginTop: -15,
    paddingHorizontal: 30,
  },

  month: {
    fontSize: 12,
    color: "#888",
  },
});