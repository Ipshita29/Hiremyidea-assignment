import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const data = [
  {
    m: "Jan",
    v: 28,
    segments: [
      { type: "pink", position: 10 },
      { type: "green", position: 55 },
    ],
  },
  {
    m: "Feb",
    v: 30,
    segments: [
      { type: "pink", position: 18 },
      { type: "green", position: 70 },
    ],
  },
  {
    m: "Mar",
    v: 28,
    segments: [
      { type: "pink", position: 22 },
      { type: "green", position: 60 },
    ],
  },
  {
    m: "Apr",
    v: 32,
    segments: [
      { type: "pink", position: 25 },
      { type: "green", position: 80 },
    ],
  },
  {
    m: "May",
    v: 28,
    segments: [
      { type: "pink", position: 20 },
      { type: "green", position: 65 },
    ],
  },
  {
    m: "Jun",
    v: 28,
    segments: [
      { type: "pink", position: 12 },
      { type: "green", position: 50 },
    ],
  },
];

function Bar({ value, maxValue, segments, active }) {
  const maxHeight = 155;
  const height = (value / maxValue) * maxHeight;
  return (
    <View style={styles.col}>
      <Text style={styles.val}>{value}</Text>
      <View style={[styles.bar, { height }]}>
        {segments.map((seg, i) => {
          const isGreen = seg.type === "green";
          return (
            <View
              key={i}
              style={[
                styles.segment,
                {
                  bottom: `${seg.position}%`,
                  backgroundColor: isGreen ? "#6f8f84" : "#e58b8b",
                },
              ]}
            >
              <Feather
                name={isGreen ? "settings" : "droplet"}
                size={12}
                color="#fff"
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}
export default function CycleTrends() {
  const maxValue = Math.max(...data.map((d) => d.v));
  return (
    <View style={styles.card}>
      <View style={styles.graph}>
        <View style={[styles.line, { top: 60 }]} />
        <View style={[styles.line, { top: 130 }]} />
        {data.map((d, i) => (
          <View key={i} style={styles.wrapper}>
            <Bar
              value={d.v}
              maxValue={maxValue}
              segments={d.segments}
              active={d.active}
            />
            <Text style={styles.month}>{d.m}</Text>
          </View>
        ))}
        <View style={styles.leftBtn}>
          <Text>‹</Text>
        </View>

        <View style={styles.rightBtn}>
          <Text>›</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 18,
    marginBottom: 14,
    elevation: 4,
  },

  graph: {
    height: 220,
    flexDirection: "row",
    alignItems: "flex-end", 
    justifyContent: "space-between",
    position: "relative",
  },

  wrapper: {
    flex: 1,
    alignItems: "center",
  },

  line: {
    position: "absolute",
    left: 25,
    right: 25,
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderColor: "#cec7c7",
  },

  col: {
    alignItems: "center",
  },

  val: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },

  bar: {
    width: 15,
    borderRadius: 20,
    backgroundColor: "#c4b6ff",
    position: "relative",
  },

  segment: {
    position: "absolute",
    left: 2,
    right: 2,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  month: {
    marginTop: 8,
    fontSize: 12,
    color: "#aaa",
  },

  leftBtn: {
    position: "absolute",
    left: -13,
    top: 100,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#a5b3cd",
    backgroundColor: "transparent", 
    alignItems: "center",
    justifyContent: "center",
  },

  rightBtn: {
    position: "absolute",
    right: -13,
    top: 100,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#a5b3cd",
    backgroundColor: "transparent", 
    alignItems: "center",
    justifyContent: "center",
  },
});