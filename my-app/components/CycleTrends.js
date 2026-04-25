import React from "react";
import { View, Text, StyleSheet } from "react-native";

const data = [
  { m: "Jan", v: 28, g: 45, p: 10 },
  { m: "Feb", v: 30, g: 30, p: 20 },
  { m: "Mar", v: 28, g: 40, p: 15 },
  { m: "Apr", v: 32, g: 25, p: 25 },
  { m: "May", v: 28, g: 38, p: 18, active: true },
  { m: "Jun", v: 28, g: 50, p: 12 },
];

export default function CycleTrends() {
  return (
    <View style={s.card}>
      <Text style={s.title}>Cycle Trends</Text>
      <View style={s.graph}>
        {/* mimikcking dashed lines on graph */}
        <View style={[s.line, { top: 30 }]} />
        <View style={[s.line, { top: 75 }]} />
        {data.map((d, i) => (
          <View key={i} style={s.col}>
            <Text style={s.val}>{d.v}</Text>
            <View style={[s.bar, d.active && s.active]}>
              <View style={s.base} />
              <View style={[s.green, { top: d.g }]}>
                <Text style={s.icon}>⚙</Text>
              </View>
              <View style={[s.pink, { bottom: d.p }]}>
                <Text style={s.icon}>💧</Text>
              </View>
            </View>
            <Text style={[s.month, d.active && s.activeText]}>
              {d.m}
            </Text>
          </View>
        ))}
        <View style={s.leftBtn}><Text>‹</Text></View>
        <View style={s.rightBtn}><Text>›</Text></View>
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  card: {
    backgroundColor: "#f7f7f9",
    padding: 18,
    marginTop: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },

  graph: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    height: 170,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    position: "relative",
  },

  line: {
    position: "absolute",
    left: 20,
    right: 20,
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ddd",
  },

  col: {
    alignItems: "center",
    flex: 1,
  },

  val: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 6,
  },

  bar: {
    width: 18,
    height: 110,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#c7bafc",
  },

  active: {
    borderWidth: 2,
    borderColor: "#7B61FF",
  },

  base: {
    flex: 1,
    backgroundColor: "#b8a9f8",
  },

  green: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 26,
    backgroundColor: "#6f9c8d",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  pink: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 24,
    backgroundColor: "#e58b8b",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    fontSize: 10,
    color: "#fff",
  },

  month: {
    marginTop: 8,
    fontSize: 12,
    color: "#aaa",
  },

  activeText: {
    color: "#000",
    fontWeight: "600",
  },

  leftBtn: {
    position: "absolute",
    left: -10,
    top: 70,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },

  rightBtn: {
    position: "absolute",
    right: -10,
    top: 70,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
