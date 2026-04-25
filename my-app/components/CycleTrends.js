import React from "react";
import { View, Text, StyleSheet } from "react-native";

const data = [
  { m: "Jan", v: 28 },
  { m: "Feb", v: 30 },
  { m: "Mar", v: 28 },
  { m: "Apr", v: 32 },
  { m: "May", v: 28, active: true },
  { m: "Jun", v: 28 },
];

export default function CycleTrends() {
  const maxValue = 34;
  const maxHeight = 120;

  return (

      <View style={s.graph}>
        
        {/* dashed lines */}
        <View style={[s.line, { top: 30 }]} />
        <View style={[s.line, { top: 75 }]} />

        {data.map((d, i) => {
          const height = (d.v / maxValue) * maxHeight;

          return (
            <View key={i} style={s.col}>
              <Text style={s.val}>{d.v}</Text>

              <View style={[s.bar, { height }, d.active && s.active]}>
                <View style={s.base} />

                {/* GREEN - fixed middle */}
                <View style={s.green}>
                  <Text style={s.icon}>⚙️</Text>
                </View>

                {/* PINK - fixed bottom */}
                <View style={s.pink}>
                  <Text style={s.icon}>💧</Text>
                </View>
              </View>

              <Text style={[s.month, d.active && s.activeText]}>
                {d.m}
              </Text>
            </View>
          );
        })}

        {/* arrows */}
        <View style={s.leftBtn}>
          <Text>‹</Text>
        </View>

        <View style={s.rightBtn}>
          <Text>›</Text>
        </View>

      </View>
  );
}

const s = StyleSheet.create({
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

  graph: {
    height: 170,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    position: "relative",
    paddingHorizontal: 4,
  },

  line: {
    position: "absolute",
    left: 20,
    right: 20,
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderColor: "#e5e5e5",
  },

  col: {
    alignItems: "center",
    flex: 1,
  },

  val: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },

  bar: {
    width: 18,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#c7bafc",
  },

  base: {
    flex: 1,
    backgroundColor: "#a99cf5",
  },

  active: {
    borderWidth: 2,
    borderColor: "#7B61FF",
  },

  green: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 26,
    bottom: "40%",  
    backgroundColor: "#6f8f83",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  pink: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 24,
    bottom: 6,    
    backgroundColor: "#e08b8b",
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
    backgroundColor: "#f0f0f0",
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
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
});