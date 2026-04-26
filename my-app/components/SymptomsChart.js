import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function SymptomsChart() {
  const pieData = [
    {
      value: 30,
      color: "#E3B1B1",
      text: "30%",
    },
    {
      value: 31,
      color: "#A9A3C9",
      text: "31%",
    },
    {
      value: 21,
      color: "#D88989",
      text: "21%",
    },
    {
      value: 17,
      color: "#7F9C91",
      text: "17%",
    },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Symptom Trends</Text>
      <Text style={styles.sub}>Compared to last cycle</Text>
      <View style={styles.container}>
        <PieChart
          donut
          data={pieData}
          radius={110}              
          innerRadius={60}          
          showText
          textColor="#111"
          textSize={12}
          showTextBackground
          textBackgroundRadius={20}  
          focusOnPress
        />
        <View style={styles.legend}>
          <View style={styles.row}>
            <View style={[styles.dot, { backgroundColor: "#E3B1B1" }]} />
            <Text>Mood</Text>
          </View>
          <View style={styles.row}>
            <View style={[styles.dot, { backgroundColor: "#A9A3C9" }]} />
            <Text>Bloating</Text>
          </View>
          <View style={styles.row}>
            <View style={[styles.dot, { backgroundColor: "#D88989" }]} />
            <Text>Fatigue</Text>
          </View>
          <View style={styles.row}>
            <View style={[styles.dot, { backgroundColor: "#7F9C91" }]} />
            <Text>Acne</Text>
          </View>
        </View>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
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
    color: "#111",
  },

  sub: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  legend: {
    marginTop: 15,
    width: "100%",
    paddingHorizontal: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
});